const dashboard = $$('.navbar-toggler');
const dropdown = $$('#navbarToggleExternalContent');
const login = element.all(by.css('.nav-link')).get(4);
const email = $$('#exampleInputEmail1');
const password = $$('exampleInputPassword1');
const submit = $('[value=\'Log In\']');
const collapsed = $('.btn.btn-link.collapsed');

describe('00_Admin Dashboard testing:', () => {
  it('01_Click on dropdown menu and select Login', async () => {
    await browser.get('http://www.ilkeciritci.com');
    await dashboard.click();
    await login.click();
  });
  it('02_Put in the admin credentials and expect the page to be loaded', async () => {
    await email.sendKeys('admin@admin.com');
    await password.sendKeys('hello123');
    await submit.click();
    expect (await collapsed.isPresent()).toBe(true, 'Dashboard is not present');
  });
  it('03_Check if the navigation is specific to amdin view');
  it('04_Select exam results and check if the admin view is present');

});
