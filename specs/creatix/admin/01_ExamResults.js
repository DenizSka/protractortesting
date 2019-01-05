const collapsed = $('.btn.btn-link.collapsed');
const addExam = $$('.btn.btn-light').first();
const editExam = $$('.btn.btn-light').get(1);
const navbar = $('.navbar-toggler');
const adminPanel = $('#navbarToggleExternalContent > div > a:nth-child(7)');
const examPage = $('.publiname');
const inputs = $$('.form-control');
const submit = $('[value=\'Submit!\']');
const edit = $('[value=\'Edit!\']');
const results = $('.headline');
const tablerows = element.all(by.css('table.table-hover tbody tr'));;
const editButtons = element.all(by.css('.btn.btn-primary'));
const deleteLast = $$('[value=\'Delete\']').last();

const casual = require('casual');
const examResult = ['Midterm', '1/3/2019', 'ABC', 'EFG', '99'];
let numberBefore;
let numberAfter;

describe('01_Admin Adding Exam Results:', () => {
  it('01_Click on view/edit new exam from dashboard and check the count', async () => {
    expect(await collapsed.isPresent()).toBe(true, 'Dashboard is not present');
    await editExam.click();
    await browser.get('http://www.ilkeciritci.com/exam-results/admin');
    browser.wait(EC.visibilityOf(results), 5000);
    numberBefore = tablerows.count();
    console.log(`this is number before: ${numberBefore}`);
    expect(await results.isPresent()).toBe(true, 'Edit/View Exam page is not present');
  });
  it('02_Go Back to dashboard and click on add new exam from dashboard and get to the add page', async () => {
    await navbar.click();
    await adminPanel.click();
    expect(await collapsed.isPresent()).toBe(true, 'Dashboard is not present');
    await addExam.click();
    await browser.get('http://www.ilkeciritci.com/exam-results/new');
    browser.wait(EC.visibilityOf(examPage), 5000);
    expect(await examPage.isPresent()).toBe(true, 'Add Exam page is not present');
  });

  it('03_Fill out the form to add new exam and click on submit ', async (done) => {
    for (let i = 0; i < examResult.length; i++) {
      await inputs.get(i)
        .sendKeys(examResult[i]);
    };
    await submit.click();
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
    await deleteLast.click();
    expect(await tablerows.count()).toEqual(numberBefore, 'Last added exam is not deleted');
  });
  it('06_Open the page for editing one of the exam results', async () => {
    let amount = casual.integer(2, 5);
    await editButtons.get(amount).click();
    expect(await examPage.getText()).toEqual('Edit:', 'Edit page for exam is not working');
  });
  it('07_Edit the exam result and submit', async () => {
    let grade = casual.integer(1, 100);
    await inputs.get(5).click();
    await browser.executeScript('arguments[0].value = \' \';', inputs.get(5));
    await inputs.get(5).sendKeys(protractor.Key.BACK_SPACE);
    await inputs.get(5).sendKeys(grade);
    await edit.click();
    expect (await results.getText()).toBe('EXAM RESULTS', 'Exam Results page for admin is not showing');
  });
});
