🏦 Accounts System CLI
An interactive banking system running via Command Line Interface (CLI), developed with Node.js. This project allows for complete bank account management through data persistence in JSON files.

✨ Features
Create Account: Registers a new user and creates a dedicated balance file.

Check Balance: Displays the current available funds for a specific account.

Deposit: Adds values to the existing balance with account validation.

Withdraw: Removes values from the account with insufficient balance verification.

Persistence: All data is securely saved locally in the /account folder.

🛠️ Technologies Used
The project was built using the following tools:

Node.js - JavaScript runtime environment.

Inquirer.js - To create interactive terminal prompts.

Chalk - To style and color console messages.

FS (File System) - Native Node.js module for file manipulation.

🚀 How to Run the Project
Follow these steps to run the project locally:

1. Clone the repository

Bash
git clone https://github.com/your-username/repository-name.git
2. Install dependencies

Ensure you are in the project's root directory and run:

Bash
npm install
3. Start the system

Bash
npm start
(Make sure your package.json has the "start": "node index.js" script. Otherwise, use node index.js).

📁 Data Structure
Account data is stored simply and efficiently in .json files:

JSON
{
  "balance": 1500.50
}
📝 Lessons Learned
This project was fundamental for practicing core backend concepts:

File I/O Manipulation: Synchronous reading and writing of data using the fs module.

Programming Logic: Error handling, input validation, and conditional flows.

Terminal UX: Creating intuitive menus and providing colorful visual feedback to the user.

📄 License

This project is under the MIT License. Feel free to use and study it!
