
const publications = element.all(by.css('.nav-link')).get(1);
const publiPageTitle = $$('.publi-title');
const publiImages = $('iframe');
const publiView = $$('.publibutton');
const backButton = $$('.btn.btn-light');
const casual = require('casual');

describe('Publications testing the following:', () => {

  xit('02_select publications and check if the images are showing', async () => {
    await publications.click();
    expect (await publiPageTitle.isPresent()).toBe(true, 'Headline is visible');
    expect (await publiImages.isPresent()).toBe(true, 'Images are visible');
    // await publiImages.count();
  });
  xit('03_select a random publication and check if a single project page is working', async () => {
    let amount = casual.integer(0,10);
    await publiView.get(amount).click();
    expect (await backButton.isPresent()).toBe(true, 'Single publication is visible');
  });
});
