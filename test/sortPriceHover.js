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

              // Hover drop-down menu

              const dropdownMenuElement = await driver.findElement(By.css('#ui-id-5'), 10000);
              const actions = driver.actions({ bridge: true });
              await actions.move({ origin: dropdownMenuElement }).perform();

              // Hover "Bottoms"

              const bottoms = await driver.findElement(By.css('#ui-id-18'), 10000);
              const actions2 = driver.actions({ bridge: true });
              await actions2.move({ origin: bottoms }).perform();

              // Click or hover "Bottoms"

             // const bottoms = await driver.findElement(By.css('#ui-id-18'), 10000);
             // await bottoms.click();

              // Click "Pants"

              const pants = await driver.findElement(By.css('#ui-id-23'), 10000);
              await pants.click();




  
                  // Assert
                  information.should.contain('$28.00');
                



            } catch(error) {
                console.log(error);
     
            } finally { 
             //   await driver.quit();
            }
        });
    });
});

