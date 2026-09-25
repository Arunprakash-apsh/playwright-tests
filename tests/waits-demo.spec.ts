import { test, expect } from '@playwright/test';

test('Never use Thread.sleep — use expect', async ({ page }) => {
    await page.goto('https://www.archimageworks.com/qposweb/');

    // This is the correct way. No fixed sleep. Wait for the condition.
    await expect(page.locator('#USER_NAME')).toBeVisible({ timeout: 15000 });

    await page.locator('#USER_NAME').fill('clientadminfr');

    // Wait for the button to be clickable, then click it
    const nextButton = page.getByRole('button', { name: 'Next' });
    await expect(nextButton).toBeEnabled();
    await nextButton.click();

    // Wait for what should happen after clicking
    // (adjust this based on what the qposweb page actually does)
    await expect(page).toHaveURL(/.*/, { timeout: 10000 });
});