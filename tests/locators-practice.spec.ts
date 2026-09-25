import { test, expect } from '@playwright/test';

test('Practice multiple locator types', async ({ page }) => {
    await page.goto('https://www.google.com');

    // 1. getByRole — find the search box by its role
    const searchBox = page.getByRole('combobox', { name: /search/i });
    await expect(searchBox).toBeVisible();

    // 2. fill using getByRole
    await searchBox.fill('Playwright locators');

    // 3. press Enter
    await searchBox.press('Enter');

    // 4. getByText — wait for a result text
    await expect(page.getByText('Playwright').first()).toBeVisible();
});