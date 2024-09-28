// scripts/login.js

const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const { LOGIN_URL, USERNAME, PASSWORD, STUDIO_SET_URL } = require('../config/config');

puppeteer.use(StealthPlugin());

/**
 * Function to log in and navigate to the study set URL
 * @param {puppeteer.Page} page - Puppeteer page object
 */
const loginAndNavigateToStudySet = async (page) => {
  console.log('Starting login...');

  await page.goto(LOGIN_URL, { waitUntil: 'networkidle2' });

  await page.type('input[type="email"]', USERNAME);
  await page.click('button[type="submit"]');

  await page.waitForSelector('input[type="password"]');
  await page.type('input[type="password"]', PASSWORD);
  await page.click('button[type="submit"]');

  await page.waitForSelector('body > app-root > app-scaffold > main > ion-router-outlet > app-feed-page', { timeout: 10000 });
  console.log('Successfully logged in.');

  await page.goto(STUDIO_SET_URL, { waitUntil: 'networkidle2' });
};

module.exports = { loginAndNavigateToStudySet };