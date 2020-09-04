const puppeteer = require('puppeteer');
const config = require('./config/default.json');
const time = require('./time.js')

(async () => {
    const browser = await puppeteer.launch({
          headless: false,
          defaultViewport: null
    })
    const page = await browser.newPage();
    await page.goto(config.urls.login);
    await page.waitForSelector('#PRO-page-content')
    await page.waitFor(1000) 
    //延遲1秒輸入
    await page.type("#email", config.user.username, {
        delay: 100
    })
    await page.type("#pwd", config.user.password, {
        delay: 100
    })
    await page.click("#submit")

    await page.waitFor(10000) 

    await page.goto(config.urls.checkin);

    await page.waitFor(3000) 

    await page.click('[class="btn btn-white btn-lg btn-block"]')
    // ]);
    // console.log($)
    await page.waitFor(2000) 
    await page.screenshot({path: './records/checkin.png'});
  
    await browser.close();
  })();