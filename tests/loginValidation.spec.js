const { test, expect } = require('@playwright/test');
const { Login } = require('../PageObjectLibrary/Login');
const { CommonMethod } = require('../PageObjectLibrary/CommonMethod');
const { AllLocators } = require('../PageObjectLibrary/AllLocators');



test('Login Validation @smoke', async ({ page }) => {
    const cm = new CommonMethod(page);

    const lc = new Login(page);
    const al = new AllLocators(page);
    

    await page.goto('https://demoblaze.com/');
    // await page.click(al.Iphone_6_32gb);


    await page.setViewportSize({ width: 1920, height: 1080 }); // Set viewport size to a larger dimension

    // Expect a title "to contain" a substring.
    await expect (page).toHaveTitle("STORE");
    const pl = await  page.locator('//a[@id="nava"]//img')
    await expect (pl).toBeVisible()

    // await page.click(al.login);

    await lc.loginFunction(); // Call the login Functiom method from the Login class

    await page.waitForTimeout(3000);
    const productList ="//div[@id='tbodyid']//h4/a"
    const links =  await page.$$(productList)
    // const allLinks = 'a'
    for (const link of links)
    {
       const lt =  await link.textContent()
       console.log(lt)
    }
    // cm.clickRandomElement(links)

    

    
    
    // await lc.logOut();

   });


   test('Login ProductlinkClick @Reg', async ({ page }) => {

    const al = new AllLocators(page);
    const lc = new Login(page);
    const cm = new CommonMethod(page);



    await page.goto('https://demoblaze.com/');
    await lc.loginFunction();

    await page.setViewportSize({ width: 1920, height: 1080 }); // Set viewport size to a larger dimension

    const productList = "//div[@id='tbodyid']//h4/a"


    const links =  await page.$$(productList);
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
            // await expect(page.locator(selector)).toBeVisible();
      
            const element = await page.locator(selector);
            await element.scrollIntoViewIfNeeded();
            await expect(page.locator(selector)).toBeVisible();
           
            await page.click(selector); // Click on the link
            await page.waitForTimeout(1000)
 

            
            //Some Common Validation
            await page.waitForSelector(al.AddtoCartButton);
            // console.log(al.AddtoCartButton)
            await expect(page.locator(al.Aboutus)).toBeTruthy(); 
            await expect.soft(page.locator(al.Address)).toBeTruthy();
           
            
            // Wait for the entire page to load
          
            console.log("Navigated to:", page.url());
            // await page.waitForLoadState("load");
            await page.goBack(); // Navigate back
            await page.waitForLoadState("load");
            // await page.waitForTimeout(3000); 
        } catch (error) {
            console.error("Error occurred while clicking link or navigating back:", error);
            console.log("Error arose for "+selector)
        }
    }



   });
