// Módulo Externos
const chalk = require("chalk");
const inquirer = require("inquirer");

// Módulo Interno
const fs = require("fs");
const { get } = require("http");
const { default: PasswordPrompt } = require("inquirer/lib/prompts/password");

startedSystem();

// Inicia o sistema
function startedSystem() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Qual função você deseja acessa?",
        choices: [
          "Criar Conta",
          "Consultar Conta",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answers) => {
      const action = answers["action"];

      if (action === "Criar Conta") {
        createAccount();
      } else if (action === "Depositar") {
        deposit();
      } else if (action === "Consultar Conta") {
        check();
      } else if (action === "Sacar") {
        withdraw();
      } else if (action === "Sair") {
        console.log(chalk.bgRed.black("Obrigado por usar o nosso Banco"));
        process.exit();
      }
    })
    .catch((error) => {
      if (error) {
        console.log(error);
      }
    });
}

//Mensagem de Criar conta
function createAccount() {
  console.log(chalk.bgBlue.white("Vamos criar sua conta agora"));
  console.log(chalk.bgCyan.black("Bem-vindo ao banco do brasil"));

  systemAccount();
}

// Sistema para Criar Conta
function systemAccount() {
  inquirer
    .prompt([
      {
        name: "account",
        message: "Digite o nome da conta",
      },
    ])
    .then((answers) => {
      const account = answers["account"];

      if (!fs.existsSync("account")) {
        fs.mkdirSync("account");
      }

      if (!account) {
        console.log(chalk.bgRed.white("Erro: Nome Vazio ao Criar Conta"));
        return startedSystem();
      }

      if (fs.existsSync(`account/${account}.json`)) {
        console.log(chalk.bgRed.white("Erro: Conta com nome já existente!"));
        systemAccount();
        return;
      }

      //Criando arquivo json para armazenar conta
      fs.writeFileSync(
        `account/${account}.json`,
        '{"balance" : 0}',
        function (err) {
          console.log(err);
        },
      );

      //Conta criada com sucesso
      console.log(chalk.bgGreen.white("Conta Criada com Sucesso!"));
      startedSystem();
    })
    .catch((err) => {
      console.log(err);
    });
}

// Função de Depositar no sistema um valor
function deposit() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Qual conta você que depositar?",
      },
    ])
    .then((answers) => {
      const accountName = answers["accountName"];

      if (!checkAccount(accountName)) {
        return startedSystem();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Digite a quantia que deseja colocar na conta: ",
          },
        ])
        .then((answers) => {
          const amount = answers["amount"];

          //Adicionar o valor
          addAmount(accountName, amount);
          startedSystem(); // Retornar ao Inicio do Sistema
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      console.log(err);
    });
}

// Função para verificar se a conta existe
function checkAccount(accountName) {
  if (!fs.existsSync(`account/${accountName}.json`)) {
    console.log(chalk.bgRed.black("Esta conta não existe, escolhe outro nome"));
    return false;
  }

  return true;
}

// Função para Adicionar valor na conta
function addAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(chalk.bgRed.white("Sem valor para Depositar, tente novamente"));
    return deposit();
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

  fs.writeFileSync(
    `account/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err);
    },
  );

  console.log(
    chalk.green(`Foi adicionado ao seu banco uma quantia de R$${amount}`),
  );
}

// Função para pegar a conta
function getAccount(accountName) {
  const accountJson = fs.readFileSync(`account/${accountName}.json`, {
    encoding: "utf8",
    flag: "r",
  });

  return JSON.parse(accountJson);
}

//Função para Verificar o saldo da conta
function check() {
  inquirer
    .prompt([
      {
        name: "account",
        message: "Digite a conta que deseja consultar",
      },
    ])
    .then((answers) => {
      const account = answers["account"];

      if (!checkAccount(account)) {
        return startedSystem();
      }

      checkAmount(account);
      return startedSystem();
    });
}

//Para verificar o saldo da conta
function checkAmount(accountName) {
  const accountData = getAccount(accountName);

  if (!accountData) {
    console.log(chalk.bgRed.white("Erro: Nome da conta Vazio"));
  }

  console.log(
    chalk.bgBlackBright.blue(
      `A conta: ${accountName}, possui R$${accountData.balance}`,
    ),
  );
}

// Função para Chamar o Saque da conta
function withdraw() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome da conta que deseja acessar:",
      },
    ])
    .then((answers) => {
      const accountName = answers["accountName"];

      if (!accountName) {
        console.log(chalk.bgRed.white("Erro: Nome vazio"));
      }

      if (!checkAccount(accountName)) {
        return startedSystem();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Digite a quantia que deseja sacar",
          },
        ])
        .then((answers) => {
          const amount = answers["amount"];
          removeAmount(accountName, amount);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

// Função para remover o valor da conta
function removeAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(chalk.bgRed.white("Sem valor para Depositar, tente novamente"));
    return withdraw();
  }

  if (accountData.balance < amount) {
    console.log(chalk.bgRed.white("Valor indisponivel"));
    return startedSystem();
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);

  fs.writeFileSync(
    `account/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err);
    },
  );

  console.log(
    chalk.red(`Foi removido ao seu banco uma quantia de R$${amount}`),
  );

  return startedSystem();
}
