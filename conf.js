require('babel-core/register');

exports.config = {
  framework: 'jasmine2',

  onPrepare: async () => {
    await browser.manage().window().setSize(1400, 900);
    await browser.manage().timeouts().implicitlyWait(5000);
    browser.waitForAngularEnabled(false);
    global.EC = protractor.ExpectedConditions;
    const browserLogs = require('protractor-browser-logs');


    const logs = browserLogs(browser);

    if (global.logs) {
      throw new Error('Oops, name is already reserved!');
    }
    global.logs = logs;

    beforeEach(() => {
      logs.reset();

      // You can put here all expected generic expectations.
      logs.ignore('cast_sender.js');
      logs.ignore('favicon.ico');

      logs.ignore(logs.or(logs.INFO, logs.DEBUG));
    });

    // afterEach(function () {
    //   return logs.verify();
    // });
  },
  directConnect: true,
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
  },
  chromeOptions: {
    args: [
      '--disable-infobars',
      '--disable-extensions',
      'verbose',
      // '--headless',
      '--disable-gpu',
      '--no-sandbox',
      '--disable-web-security',
      '--test-type=browser',
    ],
  },
  // getPageTimeout: 100000,
  // suite:{
  //   pages:[
  //   'specs/creatix/pages/01_Homepage.js'
  //   ]
  // },
  specs: [
    'specs/creatix/pages/*',
    'specs/creatix/admin/*',
  ],
  SELENIUM_PROMISE_MANAGER: false,
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },
};
