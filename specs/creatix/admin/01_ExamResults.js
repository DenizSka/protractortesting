import homePage from '../pages/HomePage';
import adminPage from './AdminPage';

const collapsed = $('.btn.btn-link.collapsed');
const examPage = $('.publiname');
const inputs = $$('.form-control');
const results = $('.headline');
const tablerows = element.all(by.css('table.table-hover tbody tr'));
const EC = protractor.ExpectedConditions;

const casual = require('casual');
const examResult = ['Midterm', '1/3/2019', 'ABC', 'EFG', '99'];
let numberBefore;
let numberAfter;

describe('01_Admin Adding Exam Results:', () => {
  it('01_Click on view/edit new exam from dashboard and check the count', async () => {
    expect(await collapsed.isPresent()).toBe(true, 'Dashboard is not present');
    await adminPage.editExamButton();
    await browser.get('http://www.ilkeciritci.com/exam-results/admin');
    numberBefore = tablerows.count();
    console.log(`this is number before: ${numberBefore}`);
    expect(await results.isPresent()).toBe(true, 'Edit/View Exam page is not present');
  });
  it('02_Go Back to dashboard and click on add new exam from dashboard and get to the add page', async () => {
    await homePage.clickNavBar();
    await adminPage.clickAdmin();
    expect(await collapsed.isPresent()).toBe(true, 'Dashboard is not present');
    await adminPage.addExamButton();
    browser.wait(EC.visibilityOf(examPage), 5000);
    expect(await examPage.isPresent()).toBe(true, 'Add Exam page is not present');
  });

  it('03_Fill out the form to add new exam and click on submit ', async (done) => {
    for (let i = 0; i < examResult.length; i++) {
      await inputs.get(i)
        .sendKeys(examResult[i]);
    };
    await adminPage.clickSubmit();
    expect (await results.getText()).toBe('EXAM RESULTS', 'Exam Results page for admin is not showing');
    done(done);
  });
  it('04_Check if the new exam result is showing', async () => {
    await browser.get('http://www.ilkeciritci.com/exam-results/admin');
    browser.wait(EC.visibilityOf(results), 5000);
    numberAfter = tablerows.count();
    expect(await numberBefore+1).toEqual(numberAfter, 'New exam is not added');
  });
  it('05_Remove the last exam result', async () => {
    await adminPage.clickDeleteLast();
    expect(await tablerows.count()).toEqual(numberBefore, 'Last added exam is not deleted');
  });
  it('06_Open the page for editing one of the exam results', async () => {
    let amount = casual.integer(2, 5);
    await adminPage.clickEditButton(amount);
    expect(await examPage.getText()).toEqual('Edit:', 'Edit page for exam is not working');
  });
  it('07_Edit the exam result and submit', async () => {
    let grade = casual.integer(1, 100);
    let element = inputs.get(5);
    await adminPage.clearBackSpace(element);
    await element.sendKeys(grade);
    await adminPage.clickEdit();
    expect (await results.getText()).toBe('EXAM RESULTS', 'Exam Results page for admin is not showing');
  });
});
