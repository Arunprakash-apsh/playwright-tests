import {test, expect} from '@playwright/test';

test('open google and check title', async ({ page }) => {
    //1. navigate to google
    await page.goto('https://www.google.com');

    //2. Assert the page title contains "Google"
    await expect(page).toHaveTitle(/Google/);

    // 3. Find the search box and type something
    await page.fill('textarea[name="q"]', 'Playwright automation');

    // 4. Press Enter
    await page.press('textarea[name="q"]', 'Enter');

    // 5. Wait for the results page to load and check the URL
    await expect(page).toHaveURL(/search/);
});