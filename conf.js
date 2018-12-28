
exports.config = {
  onPrepare: function () {
    browser.waitForAngularEnabled(false);
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
  specs: ['specs/creatix/pages/*'],
  SELENIUM_PROMISE_MANAGER: false,
    // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};





