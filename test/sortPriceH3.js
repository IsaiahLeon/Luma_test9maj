const { Builder, By, Key, until} = require('selenium-webdriver');
const should =require('chai').should();

/* As a customer,
I would like to be able to sort men's pants by price,
in order to locate the cheapest pair */

describe.only('Sort pants by price', () => {
    // Test case
    context('I sort mens pants by price', () => {
        it('I should see the cheapest pair of pants first', async () => {

//async function performHover() {
    // Create a new WebDriver instance
    const driver = await new Builder().forBrowser('firefox').build();
  
    try {
      // Navigate to your page
      await driver.get('https://magento.softwaretestingboard.com');
  
      // Find the menu element to hover over
      const menuElement = await driver.findElement(By.css('#ui-id-5'));
  
      // Create an Actions instance
      const actions = new Actions(driver);
  
      // Hover over the menu element
      await actions.move({ origin: menuElement }).perform();
  
      // Find the submenu element to hover over
      const submenuElement = await driver.findElement(By.css('#ui-id-18'));
  
      // Hover over the submenu element
      await actions.move({ origin: submenuElement }).perform();
  
      // Find the specific option in the submenu to click
      const optionElement = await driver.findElement(By.css('#ui-id-23'));
  
      // Click on the option in the submenu
      await actions.click(optionElement).perform();
    } finally {
      // Quit the WebDriver instance
     // await driver.quit();
    }
  });

        });
    });

//});
    
  
  //performHover();
