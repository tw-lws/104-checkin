const puppeteer = require('puppeteer');
const config = require('./config/default.json');
const time = require('./modules/time.js');

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
    //進入主頁
    await page.waitFor(10000) 

    await page.goto(config.urls.checkin);
    //進入打卡頁面


    await page.waitFor(time.random_secs(600))
    //等待隨機秒數後打卡(建議超過600秒)

    await page.waitFor(3000) 

    await page.click('[class="btn btn-white btn-lg btn-block"]')
    // ]);
    // console.log($)
    await page.waitFor(2000) 
    await page.screenshot({path: './records/'+time.current_time()+'checkin.png'});
  
    await browser.close();
  })();