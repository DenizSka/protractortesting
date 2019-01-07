import homePage from '../pages/HomePage';
import adminPage from './AdminPage';

const email = $('#exampleInputEmail1');
const dropdown = $('#navbarToggleExternalContent');
const collapsed = $('.btn.btn-link.collapsed');
const logout = $('.btn.btn-danger');
const adminPanel = $('#navbarToggleExternalContent > div > a:nth-child(7)');

describe('00_Admin Dashboard testing:', () => {

  it('01_verify the home page works', async () => {
    await browser.get('http://www.ilkeciritci.com');
    expect(await homePage.getAboutMe()).toEqual('ABOUT ME');
  });

  it('02_Click on dropdown menu and select login', async () => {
    await homePage.loginToAdmin();
    expect (await email.isPresent()).toBe(true, 'login page is not loaded');

  });
  it('03_Put in the admin credentials and expect the page to be loaded', async () => {
    await adminPage.sendCredentials();
    expect(await collapsed.isPresent()).toBe(true, 'Admin Dashboard is not present');
  });
  it('04_Admin page should have a different dropdown menu', async () => {
    await homePage.clickNavBar();
    expect(await logout.isPresent()).toBe(true, 'Logout button in navbar is not present');
    expect(await adminPanel.isPresent()).toBe(true, 'Admin dashboard button in navbar is not present');
  });
});
