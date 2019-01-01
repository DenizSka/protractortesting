
exports.config = {
  onPrepare: function () {
    browser.waitForAngularEnabled(false);
    let browserLogs = require('protractor-browser-logs'),
      logs = browserLogs(browser);

    if (global.logs) {
      throw new Error('Oops, name is already reserved!');
    }
    global.logs = logs;

    beforeEach(function () {
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
  seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },
  // getPageTimeout: 100000,
  // suite:{
  //   pages:[
  //   'specs/creatix/pages/01_Homepage.js'
  //   ]
  // },
  specs: ['specs/creatix/pages/*',
  'specs/creatix/admin/*'],
  SELENIUM_PROMISE_MANAGER: false,
    // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};





