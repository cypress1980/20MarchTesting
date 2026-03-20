# 🧪 SauceDemo End-to-End Test Plan

---

## 📋 Test Plan Overview

**Application Under Test:** SauceDemo  
**Application URL:** https://www.saucedemo.com/  
**Test Plan Created:** 20 March 2026  
**Test Objective:** Validate the end-to-end product purchase flow and login functionality on SauceDemo website  

---

## 🔐 Test Credentials

| Field      | Value            |
|------------|------------------|
| Username   | standard_user    |
| Password   | secret_sauce     |

---

## 📝 Test Cases

### TC_001: Positive Test Case - Complete Purchase Flow with Valid Credentials

**Test Case Title:** Validate successful product purchase flow from login to order confirmation  

**Preconditions:**  
- SauceDemo website is accessible  
- Browser is available and functional  
- Valid test credentials are available (standard_user/secret_sauce)  
- Test environment is stable  

**Test Steps:**

| Step | Test Step Description | Expected Result | Actual Result | Status |
|------|----------------------|-----------------|---------------|---------|  
| 1 | Open browser and navigate to https://www.saucedemo.com/ | SauceDemo login page is displayed with username and password fields | | |
| 2 | Enter username: "standard_user" | Username field accepts the input and displays the entered text | | |
| 3 | Enter password: "secret_sauce" | Password field accepts the input and displays masked characters | | |
| 4 | Click on "Login" button | User is successfully logged in and redirected to the products page | | |
| 5 | Verify products page is displayed | Products page loads with product inventory displayed | | |
| 6 | Add the first product (Sauce Labs Backpack) to cart | Product is added to cart, cart badge shows "1" | | |
| 7 | Click on cart icon to navigate to cart | Cart page opens showing the added product | | |
| 8 | Verify product is present in cart | Selected product is visible in cart with correct details | | |
| 9 | Click on "Checkout" button | User is redirected to checkout information page | | |
| 10 | Enter First Name: "John" | First name field accepts the input | | |
| 11 | Enter Last Name: "Doe" | Last name field accepts the input | | |
| 12 | Enter Zip Code: "12345" | Zip code field accepts the input | | |
| 13 | Click on "Continue" button | User is redirected to checkout overview page | | |
| 14 | Review order summary and verify product details | Order summary displays correct product and price information | | |
| 15 | Click on "Finish" button | Order is processed successfully | | |
| 16 | Verify order confirmation message | Order confirmation page displays "Thank you for your order!" message | | |
| 17 | Close browser | Browser closes successfully without errors | | |

**Overall Expected Result:** User successfully completes the entire purchase flow and receives order confirmation

---

### TC_002: Negative Test Case - Login with Invalid Credentials

**Test Case Title:** Validate login failure with invalid credentials  

**Preconditions:**  
- SauceDemo website is accessible  
- Browser is available and functional  
- Test environment is stable  

**Test Steps:**

| Step | Test Step Description | Expected Result | Actual Result | Status |
|------|----------------------|-----------------|---------------|---------|  
| 1 | Open browser and navigate to https://www.saucedemo.com/ | SauceDemo login page is displayed with username and password fields | | |
| 2 | Enter invalid username: "invalid_user" | Username field accepts the input and displays the entered text | | |
| 3 | Enter invalid password: "wrong_password" | Password field accepts the input and displays masked characters | | |
| 4 | Click on "Login" button | Login fails and error message is displayed | | |
| 5 | Verify error message is displayed | Error message "Epic sadface: Username and password do not match any user in this service" is shown | | |
| 6 | Verify user remains on login page | User is still on login page and not redirected | | |
| 7 | Close browser | Browser closes successfully without errors | | |

**Overall Expected Result:** Login fails gracefully with appropriate error message displayed

---

## 📊 Test Execution Summary

**Total Test Cases:** 2  
**Positive Test Cases:** 1  
**Negative Test Cases:** 1  

**Execution Status:**
- **Passed:** (To be filled during execution)  
- **Failed:** (To be filled during execution)  
- **Blocked:** (To be filled during execution)  
- **Not Executed:** (To be filled during execution)  

---

## 📝 Notes

- All test steps should be executed in the order specified  
- Each test case assumes a fresh browser session (blank state)  
- Test cases are independent and can be run in any order  
- Actual results and status fields to be filled during test execution  
- Any deviations from expected results should be documented as defects  

---

## 🏁 Test Completion Criteria

**Test Plan Completion:** All test cases executed and results documented  
**Pass Criteria:** Both test cases execute as expected with proper validation of positive and negative scenarios  
**Fail Criteria:** Any critical functionality failure or unexpected system behavior  

---

**Created by:** QA Engineer  
**Date:** 20 March 2026  
**Version:** 1.0