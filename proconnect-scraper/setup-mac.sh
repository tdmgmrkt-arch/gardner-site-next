#!/bin/bash
# One-time setup for the ProConnect Scraper Mac app.
# Run once on the Mac after copying this folder over:   bash setup-mac.sh

set -e

HERE="$(cd "$(dirname "$0")" && pwd)"
APP="$HERE/ProConnectScraper.app"

echo "Setting up ProConnect Scraper for Mac..."

# Windows filesystems don't preserve the Unix executable bit, so restore it.
chmod +x "$APP/Contents/MacOS/run"

# Config folder for the Google service account JSON (kept outside the .app).
mkdir -p "$HOME/proconnect-scraper"

if ! command -v python3 >/dev/null 2>&1; then
    echo ""
    echo "ERROR: python3 is not installed."
    echo "Install Python 3 from https://www.python.org/downloads/ or via Homebrew:"
    echo "    brew install python"
    exit 1
fi

echo "Installing Python dependencies..."
pip3 install --user playwright gspread google-auth pandas

echo "Installing Playwright's Chromium browser..."
python3 -m playwright install chromium

echo ""
echo "Setup complete."
echo ""
echo "Next steps:"
echo "  1. Copy 'front-door-pro-service-pro-8c1d8344b734.json' into:"
echo "       $HOME/proconnect-scraper/"
echo "  2. (Optional) Drag ProConnectScraper.app to /Applications."
echo "  3. Double-click ProConnectScraper.app to run. Terminal will show progress."
