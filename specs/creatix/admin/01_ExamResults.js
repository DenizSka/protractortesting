const collapsed = $('.btn.btn-link.collapsed');
const addExam = $$('.btn.btn-light').first();
const examPage = $('.publiname');
const inputs = $$('.form-control');
const submit = $('[value=\'Submit!\']');
const results = $('.headline');
const tablerows = element.all(by.css('table.table-hover tbody tr'));
const EC = protractor.ExpectedConditions;

// const admin = require('../Admin');
// import admin from '../Admin';


describe('00_Admin Adding Exam Results:', () => {
  it('01_Add a new exam', async () => {
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
    await submit.click();
  });
  it('03_Check if the new exam result is showing', async () => {
    await browser.get('http://www.ilkeciritci.com/exam-results/admin');
    browser.wait(EC.visibilityOf(results), 5000);
    expect (await tablerows.count()).toEqual(5, 'New exam is not added');
    // await addExam.click()
    // await dashboard.click();
    // await login.click();
  });
});
