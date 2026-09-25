import { Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://www.archimageworks.com/qposweb/');
    }

    async enterUsername(username: string) {
        await expect(this.page.locator('#USER_NAME')).toBeVisible({ timeout: 15000 });
        await this.page.locator('#USER_NAME').fill(username);
    }

    async clickNext() {
        await this.page.getByRole('button', { name: 'Next' }).click();
    }
}