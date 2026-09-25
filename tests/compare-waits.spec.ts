import { test, expect } from '@playwright/test';

// ❌ BAD: Thread.sleep style (Playwright's equivalent: waitForTimeout)
test('Bad wait — wastes time', async ({ page }) => {
    const start = Date.now();
    await page.goto('https://www.archimageworks.com/qposweb/');
    await page.waitForTimeout(5000); // always 5 seconds
    console.log('Bad wait took:', Date.now() - start, 'ms');
});

// ✅ GOOD: Condition-based wait
test('Good wait — finishes fast', async ({ page }) => {
    const start = Date.now();
    await page.goto('https://www.archimageworks.com/qposweb/');
    await expect(page.locator('#USER_NAME')).toBeVisible({ timeout: 15000 });
     console.log('Good wait took:', Date.now() - start, 'ms');
});