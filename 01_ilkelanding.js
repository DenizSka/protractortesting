// can not import Base Page? .loaded function is built in but it is not working.
// import app from './app';
// const basePage = require('./Base');

const dashboard = $$('.navbar-toggler');
const dropdown = $$('#navbarToggleExternalContent');
const publications = element.all(by.css('.nav-link')).get(1);
const publiPageTitle = $$('.publi-title');
const publiImages = $('iframe');
const publiView = $$('.publibutton');
const backButton = $$('.btn btn-light');
const casual = require('casual');

describe('homepage testing the following:', () => {

  it('01_open the page and check dropdown menu is showing the following', async () => {
    await browser.waitForAngularEnabled(false);
    await browser.get('http://www.ilkeciritci.com');
    await dashboard.click();
    console.log('works');
    // await app.dashboardShown();
   expect (await dropdown.isPresent()).toBe(true, 'Dropdown is not present');
  });

  it('02_select publications and check if the images are showing', async () => {
    await publications.click();
    expect (await publiPageTitle.isPresent()).toBe(true, 'Headline is visible');
    expect (await publiImages.isPresent()).toBe(true, 'Images are visible');
    // await publiImages.count();
  });
  it('03_select a random publication and check if a single project page is working', async () => {
    let amount = casual.integer(0,10);
    await publiView.get(amount).click();
    expect (await backButton.isPresent()).toBe(true, 'Single publication is visible');
  });
  it('04_go to the projects page and check if page is loading');
  it('05_select a random project click view and see if the page is loading');
  it('06_check if exam results page is loading');
  it('07_check if contact me is loading');

// admin page tests
  it('07_login as admin, get the admin dashboard and get the admin dropdown menu');


});
