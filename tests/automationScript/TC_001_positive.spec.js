// Test Case ID: TC_001
// Test Type: Positive Test Case - Complete Purchase Flow
// Application: https://www.saucedemo.com/

import { test, expect } from '@playwright/test';

test.describe('Complete Purchase Flow', () => {
  test('Positive Test Case - Complete Purchase Flow', async ({ page }) => {
    
    // 1. Navigate to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    
    // 2. Login with credentials: standard_user / secret_sauce
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    
    // 3. Verify product listing page is displayed
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
    
    // 4. Add first product (Sauce Labs Backpack) to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    
    // Verify the product was added (button changes to Remove and cart badge appears)
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
    
    // 5. Navigate to cart and verify product is present
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    
    // Verify product details in cart
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('$29.99')).toBeVisible();
    await expect(page.getByText('1').first()).toBeVisible(); // quantity
    
    // 6. Click on Checkout
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    
    // 7. Enter checkout details: First Name: John, Last Name: Doe, Zip Code: 12345
    await page.locator('[data-test="firstName"]').fill('John');
    await page.locator('[data-test="lastName"]').fill('Doe');
    await page.locator('[data-test="postalCode"]').fill('12345');
    
    // 8. Click Continue
    await page.locator('[data-test="continue"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    
    // 9. Review order summary and click Finish
    // Verify order summary details
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page.getByText('Item total: $29.99')).toBeVisible();
    await expect(page.getByText('Tax: $2.40')).toBeVisible();
    await expect(page.getByText('Total: $32.39')).toBeVisible();
    
    await page.locator('[data-test="finish"]').click();
    
    // 10. Verify order confirmation message: "Thank you for your order!"
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await expect(page.getByRole('heading', { name: 'Thank you for your order!' })).toBeVisible();
    await expect(page.getByText('Your order has been dispatched')).toBeVisible();
    
    // 11. Close browser - handled automatically by Playwright after test completion
  });
});