from playwright.sync_api import sync_playwright
import time

def verify_appearance():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 720})
        page.goto("http://localhost:5173/#/blog/fold-demo")

        # Wait for content to render
        time.sleep(3)

        # Take screenshot of the controller area
        # Controller is sticky at top-20 (5rem = 80px).
        # Let's scroll a bit to make it sticky if needed, but it should be visible anyway.
        # Actually, let's screenshot the whole page to see the controller and the folds.

        page.screenshot(path="verification/appearance.png")
        print("Screenshot saved to verification/appearance.png")

        browser.close()

if __name__ == "__main__":
    verify_appearance()
