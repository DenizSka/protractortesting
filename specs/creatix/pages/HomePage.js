// import { browser } from 'protractor';


class HomePage {
  constructor() {
    this.aboutMeLink = $('body > div.aboutme > h1');
    this.navbar = $('.navbar-toggler');
    this.loginButton = $('#navbarToggleExternalContent > div > a:nth-child(5)');
    // this.dropdown = $('#navbarToggleExternalContent');
    // this.email = $('#exampleInputEmail1');
    // this.password = $('#exampleInputPassword1');
    // this.submit = $('[value=\'Log In\']');
    // this.collapsed = $('.btn.btn-link.collapsed');
    // this.logout = $('.btn.btn-danger');
  }

  async getAboutMe() {
    console.log(`this is inside the function ${this.aboutMeLink}`);
    return this.aboutMeLink.getText();
  }

  async clickNavBar() {
    browser.wait(EC.elementToBeClickable(this.navbar), 5000);
    await this.navbar.click();
  }

  async clickLoginButton() {
    browser.wait(EC.elementToBeClickable(this.loginButton), 5000);
    await this.loginButton.click();
  }

  async loginToAdmin() {
    await this.clickNavBar();
    await this.clickLoginButton();
  }
}

export default new HomePage();
