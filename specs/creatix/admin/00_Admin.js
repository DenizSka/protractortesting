const navbar = $('.navbar-toggler');
const dropdown = $('#navbarToggleExternalContent');
const login = element.all(by.css('.nav-link')).get(4);
const email = $('#exampleInputEmail1');
const password = $('#exampleInputPassword1');
const submit = $('[value=\'Log In\']');
const collapsed = $('.btn.btn-link.collapsed');
const logout = $('.btn.btn-danger');
const EC = protractor.ExpectedConditions;
// const admin = require('../Admin');
// import admin from '../Admin';


describe('00_Admin Dashboard testing:', () => {
  it('01_Click on dropdown menu and select Login', async () => {
    await browser.get('http://www.ilkeciritci.com');
    browser.wait(EC.visibilityOf(navbar), 5000);
    await navbar.click();
    browser.wait(EC.visibilityOf(dropdown), 5000);
    await login.click();
  });
  it('02_Put in the admin credentials and expect the page to be loaded', async () => {
    await email.sendKeys('admin@admin.com');
    await password.sendKeys('hello123');
    await submit.click();
    expect (await collapsed.isPresent()).toBe(true, 'Dashboard is not present');
    await navbar.click();
    expect (await logout.isPresent()).toBe(true, 'Admin navbar is not present');
  });
});
