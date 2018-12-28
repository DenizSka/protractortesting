// can not import Base Page? .loaded function is built in but it is not working.
// import app from '../../../app';
// const basePage = require('./Base');

const dashboard = $$('.navbar-toggler');
const dropdown = $$('#navbarToggleExternalContent');

describe('homepage testing the following:', () => {

  it('01_open the page and check dropdown menu is showing the following', async () => {
    await browser.get('http://www.ilkeciritci.com');
    await dashboard.click();
    console.log('works');
    // await app.dashboardShown();
   expect (await dropdown.isPresent()).toBe(true, 'Dropdown is not present');
  });

});
