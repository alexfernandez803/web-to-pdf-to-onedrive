const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const thePageToFollow = "https://ielts-up.com/writing/band-9-sample-death-penalty.html";
  const startFileNameIndex = thePageToFollow.lastIndexOf("/");
  const endFileNameIndex = thePageToFollow.lastIndexOf(".");
  const fileName = thePageToFollow.substring(startFileNameIndex, endFileNameIndex);
  await page.goto(thePageToFollow, {waitUntil: 'networkidle2'});
  await page.pdf({path: `./tmp/${fileName}.pdf`, format: 'A4'});
 
  await browser.close();
})();

