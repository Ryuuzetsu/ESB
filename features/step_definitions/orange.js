const {Given,When,Then} = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');

let driver = new Builder().forBrowser('chrome').build();


// 1) Scenario: Validate Login with Valid Credentials 
         Given('User is on Login Page', async function () {
            const open = await driver.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            await driver.manage().setTimeouts({ implicit: 10000 });
        
            await driver.manage().window().maximize();
         });

         When('User Navigate to Login Page', async function () {
            const username = await driver.findElement(By.name('username'));
            username.click();    
            username.sendKeys('Admin');
        
            const password = await driver.findElement(By.name('password'));
            password.click();
            password.sendKeys('admin123');
         });

         Then('Message display Login Successfully', async function () {
            const login = await driver.findElement(By.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button'));
            login.click();
         });


// 2) Scenario: Create Leave 
         Given('Click Menu Leave', async function () {
           const leave = await driver.findElement(By.xpath('/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a'));
           leave.click();
        });

        //  When('Click menu apply', async function () {
        //     const leave = await driver.findElement(By.xpath('/html/body/div/div[1]/div[1]/header/div[2]/nav/ul/li[1]'));
        //     leave.click();
        //  });

        //  When('Input Data', async function () {
        //    // Write code here that turns the phrase above into concrete actions
        //    return 'pending';
        //  });

        //  Then('Submit', async function () {
        //    // Write code here that turns the phrase above into concrete actions
        //    return 'pending';
        //  });


// 3) Scenario: Update Personal Info
         Given('Click menu My Info', async function () {
            const info = await driver.findElement(By.xpath('/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a'));
            info.click();
         });

         When('Click name', async function () {
            const middle = await driver.findElement(By.name('middleName'));
            middle.click();    
            middle.sendKeys('imi');
         });

         Then('Save', async function () {
            const save = await driver.findElement(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[5]/button'));
            save.click();
         });


// 4) Scenario: Update Contact Detail 
         Given('click Contact', async function () {
            const contact = await driver.findElement(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[1]/div[2]/div[2]/a'));
            contact.click();
         });

         When('add street', async function () {
            const street = await driver.findElement(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[1]/div/div[2]/input'));
            street.click();    
            street.sendKeys('Testing');
         });

         When('add city', async function () {
            const city = await driver.findElement(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[3]/div/div[2]/input'));
            city.click();    
            city.sendKeys('Jakbar');
         });

         When('add state', async function () {
            const state = await driver.findElement(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[4]/div/div[2]/input'));
            state.click();    
            state.sendKeys('Jakarta');
         });

         When('add zip', async function () {
            const zip = await driver.findElement(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[5]/div/div[2]/input'));
            zip.click();    
            zip.sendKeys('11234');
         });
         
        //  When('add country', async function () {
        //     const country = await driver.findElement(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[1]/div/div[6]/div/div[2]/div/div'));
        //     country.click();    
        //     country.sendKeys('i');
        //     // country.sendKeys('i');
        //     // country.sendKeys('i');
        //  });

         When('add home number', async function () {
            const home = await driver.findElement(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div/div[1]/div/div[2]/input'));
            home.click();    
            home.sendKeys('7854125856');
         });

         Then('save', async function () {
            const savec = await driver.findElement(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/button'));
            savec.click();
         });


// 5) Scenario: Job 
        //  Given('Click Job', async function () {
        //     const contact = await driver.findElement(By.xpath('/html/body/div/div[1]/div[2]/div[2]/div/div/div/div[1]/div[2]/div[6]/a'));
        //     contact.click();
        //  });


// 6) Scenario: Logout 

         When('User click profile', async function () {
            const profile = await driver.findElement(By.xpath('/html/body/div/div[1]/div[1]/header/div[1]/div[2]/ul/li/span'));
            profile.click();
         });

         Then('Logout', async function () {
            const logout = await driver.findElement(By.xpath('/html/body/div/div[1]/div[1]/header/div[1]/div[2]/ul/li/ul/li[4]/a'));
            logout.click();
         });