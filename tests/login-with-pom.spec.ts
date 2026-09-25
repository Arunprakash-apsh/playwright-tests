import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login using Page Object Model', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.enterUsername('clientadminfr');
    await loginPage.clickNext();
});