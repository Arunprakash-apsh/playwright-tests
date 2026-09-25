import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.archimageworks.com/qposweb/');
  const usernameField = page.locator('#USER_NAME');
await expect(usernameField).toBeVisible({ timeout: 10000 });
await usernameField.fill('clientadminfr');
  await page.getByRole('button', { name: 'Next' }).click();
});