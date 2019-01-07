class AdminPage {
  constructor() {
    this.email = $('#exampleInputEmail1');
    this.password = $('#exampleInputPassword1');
    this.login = $('[value=\'Log In\']');
    this.addExam = $$('.btn.btn-light').first();
    this.editExam = $$('.btn.btn-light').get(1);
    this.editButtons = element.all(by.css('.btn.btn-primary'));
    this.edit = $('[value=\'Edit!\']');
    this.adminPanel = $('#navbarToggleExternalContent > div > a:nth-child(7)');
    this.submit = $('[value=\'Submit!\']');
    this.deleteLast = $$('[value=\'Delete\']').last();
  }

  async sendCredentials(){
    await this.email.sendKeys('admin@admin.com');
    await this.password.sendKeys('hello123');
    await this.login.click();
  }


  async editExamButton(){
    await this.editExam.click();
    await browser.get('http://www.ilkeciritci.com/exam-results/admin');
  }

  async addExamButton(){
    await this.addExam.click();
    await browser.get('http://www.ilkeciritci.com/exam-results/new');
  }

  async clearBackSpace(element){
    await element.click();
    await browser.executeScript('arguments[0].value = \' \';', element);
    await element.sendKeys(protractor.Key.BACK_SPACE);
  }

  async clickEditButton(clickthis){
    return this.editButtons.get(clickthis).click();
  }

  async clickSubmit(){
    return this.submit.click()
  }

  async clickDeleteLast(){
    return this.deleteLast.click()
  }

   async clickEdit(){
    return this.edit.click()
  }

  async clickAdmin(){
    return this.adminPanel.click();
  }
}

export default new AdminPage();
