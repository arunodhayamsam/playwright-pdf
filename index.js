import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

await page.goto('https://playwright.dev/');

await page.pdf({
  path: 'playwright-doc.pdf',
  format: 'A4',
  printBackground: true
});

console.log('✅ PDF generated: playwright-doc.pdf');

await browser.close();
