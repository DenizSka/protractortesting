const dashboard = $$('.navbar-toggler');
const dropdown = $$('#navbarToggleExternalContent');
const login = $$('.nav-link');

describe('00_Admin Dashboard testing:', () => {

  it('01_Click on dropdown menu and select Login', async () => {
    await browser.get('http://www.ilkeciritci.com');
    await dashboard.click();
    await login.click();
  });
  it('02_Put in the admin credentials and expect the page to be loaded');
  it('03_Check if the navigation is specific to amdin view');
  it('04_Select exam results and check if the admin view is present');


});

});
