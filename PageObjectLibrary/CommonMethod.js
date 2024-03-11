// CommonMethod.js

const { expect } = require("@playwright/test");
const { locator } = require("@playwright/test");
const { AllLocators } = require("./AllLocators");


class CommonMethod{
    
    constructor(page) {
      this.page = page;
        this.al = new AllLocators(page)
      
    }

        // This Method will get Multiple links one by one
        async GetAlltheElementsName(locatortype) {

            const links =  await this.page.$$(locatortype)
            const selectors = []; // Array to store selectors
            
            for (const link of links) {
                try {
                    const linkText = (await link.textContent()).trim(); // Get the link text
                    console.log(linkText);
                    const locator = `//a[normalize-space()='${linkText}']`; // Construct locator string
                    console.log(locator)
            
                } catch (error) {
                    console.error("Error occurred while processing link:", error);
                }
            }
        }
   

    // This Method will Click on Multiple links one by one
    async clickRandomElement(locatorDetails) {



        const links =  await this.page.$$(locatorDetails);
        const selectors = []; // Array to store selectors
        
        for (const link of links) {
            try {
                const linkText = (await link.textContent()).trim(); // Get the link text
                console.log(linkText);
                const locator = `//a[normalize-space()='${linkText}']`; // Construct locator string
                selectors.push(locator); // Add selector to the array
            } catch (error) {
                console.error("Error occurred while processing link:", error);
            }
        }
        
        // Click on each link and navigate back
        for (const selector of selectors) {
            try {
                // await expect(this.page.locator(selector)).toBeVisible();
          
                const element = await this.page.locator(selector);
                await element.scrollIntoViewIfNeeded();
                await expect(this.page.locator(selector)).toBeVisible();
               
                await this.page.click(selector); // Click on the link
                // await this.page.waitForTimeout(3000)
                await this.page.waitForLoadState("load"); 
                // await this.page.waitForSelector(al.Aboutus);

                
                // this.VerifyingProductDetailsPage();
                
                // Wait for the entire page to load
              
                console.log("Navigated to:", this.page.url());
                // await this.page.waitForLoadState("load");
                await this.page.goBack(); // Navigate back
                await this.page.waitForLoadState("load");
                // await this.page.waitForTimeout(3000); 
            } catch (error) {
                console.error("Error occurred while clicking link or navigating back:", error);
                console.log("Error arose for "+selector)
            }
        }
    }

    async VerifyingProductDetailsPage(){

        
        await this.page.waitForSelector(al.AddtoCartButton);
        // console.log(al.AddtoCartButton)
        await expect(this.page.locator(al.Aboutus)).toBeTruthy(); 
        await expect(this.page.locator(al.Address)).toBeTruthy(); 
       

    }


    
}


      
  module.exports = {CommonMethod};