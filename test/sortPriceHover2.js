const { Builder, By, Key, until} = require('selenium-webdriver');
const should =require('chai').should();

/* As a customer,
I would like to be able to sort men's pants by price,
in order to locate the cheapest pair */

//#ui-id-5 > span:nth-child(2)

describe('Sort pants by price', () => {
    // Test case
    context('I sort mens pants by price', () => {
        it('I should see the cheapest pair of pants first', async () => {

            //Start Firefox
            const driver = await new Builder().forBrowser('firefox').build(); 

            try {
              // Go to LUMA
              await driver.get('https://magento.softwaretestingboard.com/')  

              // Get the menu elements
              const menu = await driver.findElement(By.css('#ui-id-5.level-top.ui-corner-all'));
              //const expandedMenuItem = await driver.findElement(By.id('ui-id-18'));
              //const subMenuItem = await driver.findElement(By.id('ui-id-23'));

               // const menu = document.querySelector((#ui-id-5 > span:nth-child(2)));
                //const expandedMenuItem = document.getElementById('ui-id-18');
                //const subMenuItem = document.getElementById('ui-id-23');

                // Function to simulate hover event
                function simulateHover(element) {
                const event = new MouseEvent('onmouseover', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            element.dispatchEvent(event);
            }
/*
                // Function to simulate click event
                function simulateClick(element) {
                const event = new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
  });
  element.dispatchEvent(event);
}
*/
// Hover over the menu to expand it
simulateHover(menu);

// Hover over the expanded menu item to expand the submenu
//simulateHover(expandedMenuItem);

// Click on the desired alternative in the second expanded menu
//simulateClick(subMenuItem);





  
                  // Assert
                  //information.should.contain('$28.00');
                



            } catch(error) {
                console.log(error);
     
            } finally { 
             //   await driver.quit();
            }
        });
    });
});

