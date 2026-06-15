"""
ProConnect → Google Sheets scraper (v2, Playwright).

First-time setup:
    pip install playwright gspread google-auth pandas
    playwright install chromium
"""

from playwright.sync_api import sync_playwright, TimeoutError as PlaywrightTimeoutError
import gspread
from google.oauth2.service_account import Credentials
import pandas as pd
import platform
import re

# Match the UA to the host OS so ProConnect sees a consistent fingerprint.
if platform.system() == "Darwin":
    USER_AGENT = (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
    )
else:
    USER_AGENT = (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
    )

BASE_URL = "https://pro.proconnect.com/jobs"
LOGIN_URL = "https://pro.proconnect.com/login"

jobs_data = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    context = browser.new_context(user_agent=USER_AGENT)
    page = context.new_page()

    # ✅ Open login page
    page.goto(LOGIN_URL)

    # ✅ Click "Sign In" button
    try:
        page.locator(".button-interactive").first.click(timeout=10000)
        print("✅ Clicked 'Sign In' button!")
    except PlaywrightTimeoutError:
        print("❌ Failed to click 'Sign In' button!")

    # ✅ Enter login credentials
    try:
        page.locator("#loginId").fill("office@gardnerplumbingco.com")
        page.locator("#password").fill("Job13:14!")
        page.locator("#login-btn").click()
        print("✅ Entered login credentials and clicked 'Log In'!")
        page.wait_for_load_state("networkidle", timeout=60000)
    except PlaywrightTimeoutError:
        print("❌ Failed to enter credentials!")

    # ✅ Go to jobs page
    page.goto(BASE_URL)
    page.wait_for_load_state("networkidle")

    def get_job_locator():
        """ Locator for every 'Assign Pro' status pill currently on the page """
        return page.locator(
            "//div[contains(@class, '_statusPill_dzcst_42') and contains(text(), 'Assign Pro')]"
        )

    def extract_text(xpath: str) -> str:
        """ Returns the inner text of an element, or 'N/A' if missing """
        try:
            text = page.locator(xpath).first.inner_text(timeout=10000).strip()
            return text if text else "N/A"
        except PlaywrightTimeoutError:
            return "N/A"

    job_count = get_job_locator().count()

    for index in range(job_count):
        try:
            job_status = get_job_locator().nth(index)
            job_entry = job_status.locator(
                "xpath=ancestor::div[starts-with(@data-testid, 'appointment-list-item.appointment.')]"
            )
            job_entry.click()
            page.wait_for_load_state("networkidle")

            # ✅ Extract Data
            job_service = extract_text(
                "//div[@id='jobPage.jobDetails']//div[h6[contains(text(), 'Service:')]]"
            ).replace("Service:", "").strip()
            job_work_order = extract_text(
                "//div[@id='jobPage.jobDetails']//div[h6[contains(text(), 'Work Order:')]]"
            ).replace("Work Order:", "").strip()
            customer_name = extract_text(
                "//div[@id='jobPage.customerInfo']//div[h6[contains(text(), 'Name:')]]"
            ).replace("Name:", "").strip()
            customer_phone = extract_text(
                "//div[@id='jobPage.customerInfo']//div[h6[contains(text(), 'Phone:')]]"
            ).replace("Phone:", "").strip()
            job_description = extract_text(
                "//div[@id='jobPage.description']//div[contains(@class, 'text-body-long')]"
            )

            appointment_date = extract_text("//div[@data-testid='jobDetail.appointmentTime']//div[1]")
            appointment_time = extract_text("//div[@data-testid='jobDetail.appointmentTime']//div[2]")

            street_address = extract_text("//div[@data-testid='address.street']")
            city_state_zip = extract_text("//div[contains(@class, '_cityStateZip')]")

            # ✅ Split city, state, and zip
            match = re.match(r"(.+),\s([A-Z]{2})\s(\d{5})", city_state_zip)
            if match:
                city, state, zip_code = match.groups()
            else:
                city, state, zip_code = "N/A", "N/A", "N/A"

            jobs_data.append({
                "Service": job_service,
                "Work Order": job_work_order,
                "Name": customer_name,
                "Phone": customer_phone,
                "Street Address": street_address,
                "City": city,
                "State": state,
                "ZIP": zip_code,
                "Country": "US",
                "Appointment Date": appointment_date,
                "Appointment Time": appointment_time,
                "Job Description": job_description,
            })

            print(f"✅ Extracted details: {customer_name} - {customer_phone}")

            # ✅ Return to job listings
            page.goto(BASE_URL)
            page.wait_for_load_state("networkidle")

        except Exception as e:
            print(f"⚠️ Error processing job {index+1}: {e}")

    browser.close()

### ✅ GOOGLE SHEETS INTEGRATION ###
SERVICE_ACCOUNT_FILE = "front-door-pro-service-pro-8c1d8344b734.json"
scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=scope)
client = gspread.authorize(creds)

SHEET_NAME = "AcceptedJobsFDPtoST"
SHEET_TAB = "ASSIGNPROJOBS"

sheet = client.open(SHEET_NAME).worksheet(SHEET_TAB)

# ✅ Load existing Work Orders for duplicate check
existing_jobs = sheet.get_all_records()
existing_work_orders = {row["Work Order"] for row in existing_jobs if "Work Order" in row}

# ✅ Filter only new jobs
new_jobs_data = [job for job in jobs_data if job["Work Order"] not in existing_work_orders]

if new_jobs_data:
    new_jobs_df = pd.DataFrame(new_jobs_data)
    sheet.append_rows(new_jobs_df.values.tolist())
    print(f"✅ {len(new_jobs_df)} new 'Assign Pro' jobs added to Google Sheets!")
else:
    print("⚠️ No new 'Assign Pro' jobs found.")
