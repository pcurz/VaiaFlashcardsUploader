/**
 * Function to add questions from a JSON array
 * @param {puppeteer.Page} page - Puppeteer page object
 * @param {Array} questions - Array of questions with their answers and correctness status
 */
const addQuestions = async (page, questions) => {
    for (const question of questions) {
      await page.waitForSelector('body > app-root > app-scaffold > main > ion-router-outlet > app-standalone-editor > form');
  
      console.log(`Adding question: ${question.text}`);
  
      await page.type('body > app-root > app-scaffold > main > ion-router-outlet > form > app-flashcard-standalone-editor > form', question.text);
  
      for (let i = 0; i < question.answers.length; i++) {
        const answer = question.answers[i];
        if (i === 0) {
          // Type the first answer
          await page.click('body > app-root > form > div.editor-bottom-container > div');
          await page.type('body > app-root > app-scaffold > form > div.editor-bottom-container > div', answer.text);
        } else {
          // For subsequent answers, add a new answer
          await page.click('body > app-root > form > div.editor-bottom-container > button');
          await page.type('body > app-root > form > div.editor-bottom-container > div', answer.text);
        }
  
        // Mark the answer as correct if applicable
        if (answer.correct) {
          await page.click(`body > app-root > form > div.editor-bottom-container > app-flashcard-text-input-field:nth-child(${i + 1}) > div > div > ui-slide-toggle > label > span`);
        }
      }
  
      console.log('Saving question...');
      await page.click('body > app-root > aside > header > div > button');
    }
  };
  
  module.exports = { addQuestions };  