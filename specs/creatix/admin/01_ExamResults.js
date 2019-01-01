const collapsed = $('.btn.btn-link.collapsed');
const logout = $('.btn.btn-danger');
const addExam = $$('.btn.btn-light').first();
const examPage = $('.publiname');
const inputs = $$('.form-control');
const EC = protractor.ExpectedConditions;
// const admin = require('../Admin');
// import admin from '../Admin';


describe('00_Admin Adding Exam Results:', () => {
  it('01_Add new exam page showing', async () => {
    expect (await collapsed.isPresent()).toBe(true, 'Dashboard is not present');
    await addExam.click();
    await browser.get('http://www.ilkeciritci.com/exam-results/new');
    browser.wait(EC.visibilityOf(examPage), 5000);
    expect (await examPage.isPresent()).toBe(true, 'Add Exam page is not present');
    await inputs.get(0).sendKeys('Midterm');
    await inputs.get(1).sendKeys('1/2/3');
    await inputs.get(2).sendKeys('Deniz');
    await inputs.get(3).sendKeys('Testing');
    await inputs.get(4).sendKeys('99');
  });
  xit('04_Select exam results and check if the admin view is present', async () => {
    // await addExam.click()
    // await dashboard.click();
    // await login.click();
  });
});
