# ProConnect Scraper — v1 (legacy / archived)

Archived on 2026-04-20. Kept for reference during the v2 Playwright rebuild.

## What it does
- Logs into `pro.proconnect.com` as `office@gardnerplumbingco.com`
- Pulls every job in "Assign Pro" status
- Extracts customer name, phone, address, service, work order #, appointment, description
- Appends new jobs (dedup by Work Order) to Google Sheet `AcceptedJobsFDPtoST` → tab `ASSIGNPROJOBS`
- Requires `front-door-pro-service-pro-8c1d8344b734.json` (Google service account key) in working dir

## Why it's being replaced
- Selenium + ChromeDriver is slow and flaky
- Brittle XPath tied to generated CSS class hashes (`_statusPill_dzcst_42`, `_cityStateZip`) — breaks on any ProConnect UI deploy
- `time.sleep()` waits instead of condition-based
- **Hardcoded plaintext password** (security issue — must be rotated regardless of rebuild)
- Runs locally and must be manually triggered
- Outputs to Google Sheets instead of directly into GHL (the agency's standard lead path)

## Security note
The ProConnect password `Job13:14!` was hardcoded in this script. **Rotate it immediately.** The v2 rebuild will load credentials from environment variables / Railway secrets.

## v2 target architecture (see parent client folder for live version)
- Playwright (Python or TS) instead of Selenium
- Deployed on Railway alongside the GBP auto-poster
- Cron-triggered every 15–30 min
- POSTs new jobs directly to a GHL webhook → contact + opportunity created, no Google Sheet
- Env-based secrets, structured logging, retry + failure alert to the user
