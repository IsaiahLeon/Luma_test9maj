const { Builder, By, Key, until} = require('selenium-webdriver');
const should =require('chai').should();

/* As a customer,
I would like to be able to sort men's pants by price,
in order to locate the cheapest pair */

describe('Sort pants by price', () => {
    // Test case
    context('I sort mens pants by price', () => {
        it('I should see the cheapest pair of pants first', async () => {

            //Start Firefox
            const driver = await new Builder().forBrowser('firefox').build(); 

            try {
              // Go to LUMA
              await driver.get('https://magento.softwaretestingboard.com/')  

              // Hover "Men" drop-down menu
              // await driver.findElement(By.css('#ui-id-5')).click();
              await driver.wait(until.elementLocated(By.css('#ui-id-5')), 10000);

              // Hover "Bottoms"
              await driver.wait(until.elementLocated(By.css('#ui-id-18')), 10000);
              // await driver.findElement(By.css('#ui-id-18')).click();

              // Press "Pants"
              await driver.findElement(By.css('#ui-id-23')).click();

              await driver.sleep(1000);

              // Click Sort by drop-down menu
              await driver.findElement(By.css('#sorter')).click(); 

              // Click Sort by: Price
              await driver.findElement(By.css('html body.page-with-filter.page-products.categorypath-men-bottoms-men-pants-men.category-pants-men.catalog-category-view.page-layout-2columns-left div.page-wrapper main#maincontent.page-main div.columns div.column.main div.toolbar.toolbar-products div.toolbar-sorter.sorter select#sorter.sorter-options option')).click();
             //CSS selector copy: div.toolbar:nth-child(3) > div:nth-child(4) > select:nth-child(2) > option:nth-child(3)

            } catch(error) {
                console.log(error);
     
            } finally { 
                await driver.quit();
            }
        });
    });
});
