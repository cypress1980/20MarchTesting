// spec: TC_002 - Negative Test Case: Invalid Login
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('TC_002 - Negative Test Case: Invalid Login', () => {
  test('Invalid Login - Username and password do not match', async ({ page }) => {
    // Navigate to SauceDemo login page
    await page.goto('https://www.saucedemo.com/');

    // Enter invalid username: invalid_user
    await page.locator('[data-test="username"]').fill('invalid_user');

    // Enter invalid password: wrong_password
    await page.locator('[data-test="password"]').fill('wrong_password');

    // Click Login button to attempt login with invalid credentials
    await page.locator('[data-test="login-button"]').click();

    // Verify the error message is displayed
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();

    // Verify user remains on login page (check URL)
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});