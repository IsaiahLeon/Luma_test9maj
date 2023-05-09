const { Builder, By, Key, until} = require('selenium-webdriver');
const should = require('chai').should();
require('dotenv').config();

// Login data
let user = process.env.USER;
let pass = process.env.PASS;

/*
As a user of Luma webstore,
I would like to be able to login,
so that I can see my profile
*/


// ta bort .only senare - only to run this testblock och .skip (skip this testblock)
describe.only('Login to Luma demostore', () =>{
    context('I click on the login and enter my credentials', () => {
        it('I should be logged in and see my profile', async () => {
            const driver = await new Builder().forBrowser('firefox').build();
            try {
            
            // Go to store
            await driver.get('https://magento.softwaretestingboard.com');

            // Go to log in page
            await driver.findElement(By.css('.authorization-link > a:nth-child(1)')).click();
            
            // Get the form and send keys
            await driver.wait(until.elementLocated(By.id('email')), 10000);
            
            // Send keys
            await driver.findElement(By.id('email')).sendKeys(user);
            await driver.findElement(By.id('pass')).sendKeys(pass);

            // Click the button
            await driver.findElement(By.css('#send2')).click();

            // Implicit wait to allow site to load
            await driver.sleep(1000);

            // Get to our profile
            await driver.wait(until.elementLocated(By.css('.action.switch')), 20000);
            await driver.findElement(By.css('.action.switch')).click();

            // Click my profile
           // await driver.wait(until.elementLocated(By.css('a[href="https://magento.softwaretestingboard.com/customer/account/")), 10000);
            await driver.wait(until.elementLocated(By.css('a[href$="/customer/account/"]')), 10000);
            await driver.findElement(By.css('a[href$="/customer/account/"]')).click();   
            
            // Get and check our information
            await driver.wait(until.elementLocated(By.css('.box-information .box-content p')), 10000);
            const information = await driver.findElement(By.css('.box-information .box-content p')).getText();

            //Assert
            information.should.contain('Test Testsson');

                

            
            } finally {
                await driver.quit();
            }
        });
    });
});