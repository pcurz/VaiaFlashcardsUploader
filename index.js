const puppeteer = require('puppeteer-extra');
const { loginAndNavigateToStudySet } = require('./scripts/login');
const { addQuestions } = require('./scripts/addQuestions');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const [page] = await browser.pages();

  await loginAndNavigateToStudySet(page);

  const data = fs.readFileSync('./data/questions.json');
  const questions = JSON.parse(data);

  await addQuestions(page, questions);

  await browser.close();
})();