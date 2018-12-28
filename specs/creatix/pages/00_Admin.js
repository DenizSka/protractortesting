const navbar = $('.navbar-toggler');
const dropdown = $('#navbarToggleExternalContent');
const login = element.all(by.css('.nav-link')).get(4);
const email = $('#exampleInputEmail1');
const password = $('#exampleInputPassword1');
const submit = $('[value=\'Log In\']');
const collapsed = $('.btn.btn-link.collapsed');
const logout = $('.btn.btn-danger');
const EC = protractor.ExpectedConditions;
const addExam = $$('.btn.btn-light').first();
const examPage = $('.btn.btn-primary.mb-2');
const inputs = $$('.form-control');

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
  it('03_Add new exam page showing', async () => {
    expect (await collapsed.isPresent()).toBe(true, 'Dashboard is not present');
    await addExam.click();
    // browser.wait(EC.visibilityOf(examPage), 5000);
    expect (await examPage.isPresent()).toBe(true, 'Add Exam page is not present');
    // await inputs.get(1).sendKeys('Deniz');
  });
  xit('04_Select exam results and check if the admin view is present', async () => {
    // await addExam.click()
    // await dashboard.click();
    // await login.click();
  });
});
