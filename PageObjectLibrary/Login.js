// Login.js

const { test, expect } = require('@playwright/test');
const { AllLocators } = require('../PageObjectLibrary/AllLocators');


class Login{
  
    constructor(page) {
      this.page = page;
      this.al = new AllLocators();
      
    }
  
    async loginFunction () {
      
      const loginButtonLocator = this.al.login;
      await this.page.locator(loginButtonLocator).click();
      await this.page.locator('id=loginusername').fill(this.al.loginUserName);
      await this.page.locator('id=loginpassword').fill(this.al.loginPwd);
      await this.page.click(this.al.loginButton);
    }

    async logOut(){
        const logoutLink = await this. page.locator('//a[normalize-space()="Log out"]');


        await expect(logoutLink).toBeVisible();
        
        await logoutLink.click();
        
    }
  }
  
  module.exports = {Login};

 