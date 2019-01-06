import homePage from '../pages/HomePage';
import adminPage from './AdminPage';
// const aboutMeLink = $('.writingtitle');
// const loginButton = $('#navbarToggleExternalContent > div > a:nth-child(5)');
const navbar = $('.navbar-toggler');
const email = $('#exampleInputEmail1');
const dropdown = $('#navbarToggleExternalContent');
const submit = $('[value=\'Log In\']');
const collapsed = $('.btn.btn-link.collapsed');
const logout = $('.btn.btn-danger');
const adminPanel = $('#navbarToggleExternalContent > div > a:nth-child(7)');
// const EC = protractor.ExpectedConditions;


describe('00_Admin Dashboard testing:', () => {

  it('verify the home page works', async () => {
    await browser.get('http://www.ilkeciritci.com');
    expect(await homePage.getAboutMe()).toEqual('ABOUT ME');
  });
  //
  // it('01_Verify the home page works', async () => {
  //   await browser.get('http://www.ilkeciritci.com');
  //   // console.log(`about me: ${JSON.stringify(aboutMeLink)}`);
  //   expect(await aboutMeLink.getText()).toEqual('ABOUT ME');
  // });
  it('02_Click on dropdown menu and select login', async () => {
    // await homePage.clickNavBar();
    // browser.wait(EC.visibilityOf(dropdown), 5000);
    // expect(await dropdown.isPresent()).toBe(true, 'dropdown navigation is not loaded' );
    await homePage.loginToAdmin();
    expect (await email.isPresent()).toBe(true, 'login page is not loaded');

  });
  it('03_Put in the admin credentials and expect the page to be loaded', async () => {
    await adminPage.sendCredentials();
    await submit.click();
    expect(await collapsed.isPresent()).toBe(true, 'Admin Dashboard is not present');
  });
  it('04_Admin page should have a different dropdown menu', async () => {
    await navbar.click();
    expect(await logout.isPresent()).toBe(true, 'Logout button in navbar is not present');
    expect(await adminPanel.isPresent()).toBe(true, 'Admin dashboard button in navbar is not present');
  });
});
