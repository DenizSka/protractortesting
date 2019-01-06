class AdminPage {
  constructor() {
    this.email = $('#exampleInputEmail1');
    this.password = $('#exampleInputPassword1');
  }

  async sendCredentials(){
    await this.email.sendKeys('admin@admin.com');
    await this.password.sendKeys('hello123');
  }

}

export default new AdminPage();
