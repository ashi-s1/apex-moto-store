const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const BASE_URL = "http://localhost:3001";
const OUT_DIR = path.join(__dirname, "..", "docs", "screenshots");

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function run() {
  console.log("Launching Edge headless...");
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"],
  });

  try {
    const page = await browser.newPage();

    // 1. Desktop - Homepage
    console.log("1. Capturing Desktop Homepage...");
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
    await page.goto(`${BASE_URL}/`, { waitUntil: "domcontentloaded" });
    await sleep(2000);
    await page.screenshot({
      path: path.join(OUT_DIR, "01-desktop-home.png"),
      fullPage: false,
    });

    // 2. Desktop - Hardware Catalog / Products Page
    console.log("2. Capturing Desktop Catalog...");
    await page.goto(`${BASE_URL}/products`, { waitUntil: "domcontentloaded" });
    await sleep(1500);
    await page.screenshot({
      path: path.join(OUT_DIR, "02-desktop-catalog.png"),
      fullPage: false,
    });

    // 3. Desktop - Product Detail Page (Top Hero & Gallery)
    console.log("3. Capturing Desktop Product Detail Hero...");
    await page.goto(`${BASE_URL}/products/apex-gp-r-carbon-helmet`, {
      waitUntil: "domcontentloaded",
    });
    await sleep(1500);
    await page.screenshot({
      path: path.join(OUT_DIR, "03-desktop-product-detail.png"),
      fullPage: false,
    });

    // 4. Desktop - Product Detail (Specs & CAD Fitment Matrix)
    console.log("4. Capturing Desktop Specs & Fitment Matrix...");
    await page.evaluate(() => {
      window.scrollBy(0, 750);
    });
    await sleep(800);
    await page.screenshot({
      path: path.join(OUT_DIR, "04-desktop-tech-specs-fitment.png"),
      fullPage: false,
    });

    // 5. Mobile - Homepage Viewport
    console.log("5. Capturing Mobile Homepage (iPhone 14 Spec: 390x844)...");
    await page.setViewport({
      width: 390,
      height: 844,
      isMobile: true,
      hasTouch: true,
      deviceScaleFactor: 2,
    });
    await page.goto(`${BASE_URL}/`, { waitUntil: "domcontentloaded" });
    await sleep(1500);
    await page.screenshot({
      path: path.join(OUT_DIR, "05-mobile-home-viewport.png"),
      fullPage: false,
    });

    // 6. Mobile - Navigation Drawer Open
    console.log("6. Capturing Mobile Navigation Drawer...");
    const menuButton = await page.$('button[aria-label*="navigation menu"]');
    if (menuButton) {
      await menuButton.click();
      await sleep(600);
      await page.screenshot({
        path: path.join(OUT_DIR, "06-mobile-navigation-drawer.png"),
        fullPage: false,
      });
    }

    // 7. Mobile - Product Detail with Sticky Bottom Action Bar
    console.log("7. Capturing Mobile Product Detail & Floating Sticky Buy Bar...");
    await page.goto(`${BASE_URL}/products/apex-gp-r-carbon-helmet`, {
      waitUntil: "domcontentloaded",
    });
    await sleep(1500);
    await page.evaluate(() => {
      window.scrollBy(0, 650);
    });
    await sleep(800);
    await page.screenshot({
      path: path.join(OUT_DIR, "07-mobile-product-sticky-cart.png"),
      fullPage: false,
    });

    // 8. Mobile - Interactive Fitment Verification Checker
    console.log("8. Capturing Mobile Interactive Fitment Verification...");
    await page.evaluate(() => {
      window.scrollBy(0, 1100);
    });
    await sleep(800);
    await page.screenshot({
      path: path.join(OUT_DIR, "08-mobile-fitment-checker.png"),
      fullPage: false,
    });

    console.log("SUCCESS: All screenshots saved in docs/screenshots/");
  } finally {
    await browser.close();
  }
}

run().catch((err) => {
  console.error("Error during screenshot capture:", err);
  process.exit(1);
});
