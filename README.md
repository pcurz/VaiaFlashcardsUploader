# 📚 Vaia Flashcards Uploader

![Automation](https://img.shields.io/badge/Automation-Puppeteer-blue?style=flat-square)
![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)
![Node Version](https://img.shields.io/badge/Node-%3E%3D%2022.0.0-green?style=flat-square)
![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen?style=flat-square)

## ✨ Overview
**Vaia Flashcards Uploader** is an automation tool built with Puppeteer to upload flashcards directly to the [Vaia](https://www.vaia.com) study platform. The idea behind this project emerged during my university days 📅, when I had to prepare for exams. Instead of manually inserting questions one by one, I decided to automate the process and save time. With the help of **ChatGPT**, I could generate question sets quickly and then use this script to upload them in bulk.

## 🚀 Features
- **Automated Login**: Log in to Vaia without manual input.
- **Batch Upload**: Automatically add multiple flashcards from a pre-defined JSON file.
- **Stealth Mode**: Uses Puppeteer Stealth Plugin to avoid detection.
- **Error Handling**: Gracefully handles unexpected popups or modals.
- **Customizable**: Easily modify the script for different study sets.

## 📁 Project Structure
```bash
vaia-flashcards-uploader/
│
├── config/
│   └── config.js                # Configuration file (URLs and credentials)
│
├── scripts/
│   ├── login.js                 # Script for handling login
│   └── addQuestions.js          # Script for adding questions to Vaia
│
├── data/
│   └── questions.json           # JSON file with the questions to be uploaded
│
├── index.js                     # Main entry point for the application
├── package.json                 # Node.js project file with dependencies
├── README.md                    # Project documentation (this file)
└── LICENSE                      # GPL v3 License file
```

## 🛠️ Setup & Installation
Before you begin, ensure you have **Node.js 22+** installed on your system.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pcurz/VaiaFlashcardsUploader.git
   cd vaia-flashcards-uploader
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Update the configuration:**
   - Go to `config/config.js` and update the `USERNAME` and `PASSWORD` fields with your Vaia account credentials.
   - Replace the `STUDIO_SET_URL` with your own study set URL.

4. **Prepare your questions:**
   - Modify the `data/questions.json` file to include your own questions in the format shown below:
   ```json
   [
     {
       "text": "What is the capital of France?",
       "answers": [
         { "text": "Paris", "correct": true },
         { "text": "London", "correct": false },
         { "text": "Berlin", "correct": false }
       ]
     }
   ]
   ```

5. **Run the application:**
   ```bash
   npm start
   ```

## 💡 Usage Tips
- Make sure to use valid question formats in the `questions.json` file.
- Use `npm run dev` for development mode with auto-reloading using **nodemon**.
- To view the automation process, set `headless: false` in `index.js` when launching Puppeteer.

## 🤖 Automation Workflow
1. **Login**: Uses Puppeteer to log in to Vaia with your credentials.
2. **Navigate**: Goes to the specified study set URL.
3. **Add Questions**: Iterates through each question in `questions.json` and fills out the form automatically.
4. **Save and Repeat**: Saves each question and moves on to the next until all are uploaded.

## 📝 License
This project is licensed under the **GNU General Public License v3.0**. See the [LICENSE](./LICENSE) file for more details.

## 💬 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/pcurz/VaiaFlashcardsUploader/issues) or submit a pull request.

## 📧 Contact
For any questions or suggestions, feel free to reach out:
- **GitHub**: [pcurz](https://github.com/pcurz)

## 🙏 Acknowledgments
Special thanks to:
- **Puppeteer**: For enabling headless browser automation.
- **ChatGPT**: For generating questions that saved countless hours.
- **Vaia**: For providing a great platform to study and manage flashcards.

---

### ⚠️ **Disclaimer**
This tool is for educational and personal use only. Using automation scripts to interact with websites may violate the terms of service. Make sure to check the terms and use it responsibly!