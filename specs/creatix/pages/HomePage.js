// import { browser } from 'protractor';


class HomePage {
  constructor() {
    // this.aboutMeLink = $('body > div.aboutme > h1');
    this.aboutMeLink = $('.writingtitle');
    this.navbar = $('.navbar-toggler');
    this.loginButton = $('#navbarToggleExternalContent > div > a:nth-child(5)');
    this.EC = protractor.ExpectedConditions;

  }

  async getAboutMe() {
    console.log(`this is inside the function ${this.aboutMeLink}`);
    return this.aboutMeLink.getText();
  }

  async clickNavBar() {
    browser.wait(EC.elementToBeClickable(this.navbar), 5000);
    return this.navbar.click();
  }


  async clickLoginButton() {
    browser.wait(EC.elementToBeClickable(this.loginButton), 5000);
    return this.loginButton.click();
  }

  async loginToAdmin() {
    await this.clickNavBar();
    await this.clickLoginButton();
  }
}

export default new HomePage();
