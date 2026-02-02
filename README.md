
# 🏦 Accounts System CLI

An interactive banking system running via Command Line Interface (CLI), developed with **Node.js**. This project allows for complete bank account management through data persistence in JSON files.

---

## ✨ Features

* **Create Account:** Registers a new user and creates a dedicated balance file.
* **Check Balance:** Displays the current available funds for a specific account.
* **Deposit:** Adds values to the existing balance with account validation.
* **Withdraw:** Removes values from the account with insufficient balance verification.
* **Persistence:** All data is securely saved locally in the `/account` folder.

---

## 🛠️ Technologies Used

The project was built using the following tools:

* [Node.js](https://nodejs.org/) - JavaScript runtime environment.
* [Inquirer.js](https://www.npmjs.com/package/inquirer) - To create interactive terminal prompts.
* [Chalk](https://www.npmjs.com/package/chalk) - To style and color console messages.
* **FS (File System)** - Native Node.js module for file manipulation.

---

## 🚀 How to Run the Project

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/repository-name.git](https://github.com/your-username/repository-name.git)

```

### 2. Install dependencies

Ensure you are in the project's root directory and run:

```bash
npm install

```

### 3. Start the system

```bash
npm start

```

> *Note: Make sure your `package.json` has the `"start": "node index.js"` script. Otherwise, use `node index.js`.*

---

## 📁 Data Structure

Account data is stored simply and efficiently in `.json` files:

```json
{
  "balance": 1500.50
}

```

---

## 📝 Lessons Learned

This project was fundamental for practicing core backend concepts:

1. **File I/O Manipulation:** Synchronous reading and writing of data using the `fs` module.
2. **Programming Logic:** Error handling, input validation, and conditional flows.
3. **Terminal UX:** Creating intuitive menus and providing colorful visual feedback to the user.

---

## 👨‍💻 About the Author

I am a **Backend Development student** at **SENAI CIMATEC** in Salvador, Brazil. I identify as a **content creator** focusing on programming, sharing my journey and technical knowledge with the community.

Currently, I am building projects like **StoreHost** and mastering technologies such as **Node.js**, **Java**, and **Scrum** as I seek my first professional opportunity in software development.

---

### 📄 License

This project is under the MIT License. Feel free to use and study it!

```

---

### 💡 Lembrete Importante
Certifique-se de que o nome do arquivo no seu GitHub seja exatamente **`README.md`** (com o ponto e o "md" no final). Isso garantirá que o GitHub aplique toda a formatação visual que definimos, como títulos, negritos e listas de itens.

**Gostaria que eu te ajudasse a criar um arquivo `.gitignore` específico para esse projeto, garantindo que as contas criadas na pasta `/account` não subam para o seu repositório público?**

```
