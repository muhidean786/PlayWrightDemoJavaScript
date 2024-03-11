const { test, expect } = require('@playwright/test');
const { Login } = require('../PageObjectLibrary/Login');
const { CommonMethod } = require('../PageObjectLibrary/CommonMethod');
const { AllLocators } = require('../PageObjectLibrary/AllLocators');
const {DatabaseConnection} = require('../DatabaseValidation/DatabaseConnection');
import { allure } from "allure-playwright";
// Corrected import path

test('Assertion Validation @demo', async ({page})=> {

    const DC = new DatabaseConnection()

    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')
    await expect (page).toHaveTitle("nopCommerce demo store. Register")

    await page.setViewportSize({ width: 1920, height: 1080 });

    //input[@id='null']
//input[@id='small-searchterms']
//input[@id='gender-male']
//input[@id='gender-female']
//input[@id='FirstName']
//input[@id='LastName']
//input[@id='Email']
//input[@id='Company']
//input[@id='Newsletter']
//input[@id='Password']
//input[@id='ConfirmPassword']
//input[@id='null']
//input[@id='null']
//input[@id='newsletter-email']

const RbMale = await page.locator('#gender-male')
await RbMale.click()
await expect(RbMale).toBeChecked();

const RbFeMale = await page.locator('#gender-female')
await RbFeMale.click()
await expect(RbFeMale).toBeChecked();

const FNameBox = await page.locator('#FirstName')
await expect(FNameBox).toBeEmpty();
const LnameBox = await page.locator('#LastName')
await expect(LnameBox).toBeEmpty();
const Email = await page.locator('#Email')
await expect(Email).toBeEmpty();

const Company = await page.locator('#Company')
await expect(Company).toBeEmpty();
const Password = await page.locator('#Password')
await expect(Password).toBeEmpty();

const ConfPas = await page.locator('#ConfirmPassword')
await expect.soft (ConfPas).toBeEmpty();

const Name = "Muhammad"

await FNameBox.fill(Name);


await LnameBox.fill("Mohinuddin");

const day = await page.locator('//select[@name="DateOfBirthDay"]')
await day.selectOption('11');
const month = await page.locator('//select[@name="DateOfBirthMonth"]')
await month.selectOption('April')
const year = await page.locator('//select[@name="DateOfBirthYear"]')
await year.selectOption('1975')


await Email.fill("testingDemo@gmail.com")


const NewsLetter = await page.locator('#Newsletter')
await expect(NewsLetter).toBeChecked()
await NewsLetter.click({button:'right'})
await NewsLetter.click({button:'left'})
await page.waitForTimeout(1000);

await  Password.fill('12456');
await ConfPas.fill('654231');

await page.click('//button[@id="register-button"]')

await page.waitForTimeout(2000);

const pwdError = await page.locator('//span[@id="ConfirmPassword-error"]')

DC.DBQuery(Name)

// const optionBootstrap = await page.$$('ui>li label input')


// console.log(text)
await expect(pwdError).toBeVisible()

});