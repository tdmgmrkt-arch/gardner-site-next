# ProConnect Scraper — Mac App

Double-click `ProConnectScraper.app`, a Terminal window opens showing live progress, and the scraper logs into ProConnect, pulls "Assign Pro" jobs, and appends new ones to the Google Sheet. Same behavior as the Python script — just wrapped in a real Mac app.

## First-time setup (~2 minutes)

1. **Transfer the whole `proconnect-scraper` folder** to the Mac (AirDrop, USB, Google Drive, etc.).
2. **Open Terminal, `cd` into the folder**, and run:
   ```
   bash setup-mac.sh
   ```
   This:
   - Restores the executable bit on the app launcher (Windows loses it during transfer)
   - Creates `~/proconnect-scraper/` for your config
   - Installs Python deps (`playwright`, `gspread`, `google-auth`, `pandas`)
   - Downloads Playwright's Chromium browser
3. **Copy the Google service account JSON** to:
   ```
   ~/proconnect-scraper/front-door-pro-service-pro-8c1d8344b734.json
   ```
4. **Move `ProConnectScraper.app` to `/Applications/`** (optional — it works from anywhere).

## Running

Double-click `ProConnectScraper.app`. A Terminal window pops up showing the ✅ / ❌ / ⚠️ progress messages. When the run finishes, press any key to close the window.

## First-launch Gatekeeper warning

macOS may say *"ProConnectScraper can't be opened because it is from an unidentified developer."*

Fix: **right-click the app → Open → Open**. Only needed the first time — macOS remembers after that.

## Troubleshooting

- **"python3: command not found"** — install Python 3 from [python.org](https://www.python.org/downloads/) or `brew install python`, then re-run `setup-mac.sh`.
- **Terminal flashes then closes** — the run script likely lost its executable bit. Re-run `setup-mac.sh`.
- **Chrome doesn't open** — run `python3 -m playwright install chromium` manually.
- **Google Sheets errors** — confirm the service account JSON is at `~/proconnect-scraper/front-door-pro-service-pro-8c1d8344b734.json` (exact filename).
