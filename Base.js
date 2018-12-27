import {log} from './lib/logging';
import fs from 'fs';

log('log it works');

const indexFileContent = fs.readFileSync('./index.js');
console.log('indexfilecontent', testing.toString());

export default class BasePage {
  constructor() {
    super();
    this.dashboard = $$('.navbar-toggler');
    this.dropdown = $$('.collapse show');
  }
  async dashboardShown() {
    await this.dashboard.click();
    expect(await this.dropdown.loaded()).toBe(true, 'Dropdown is not loaded');
  }

  log(msg){
    console.log(msg);
  }
}
