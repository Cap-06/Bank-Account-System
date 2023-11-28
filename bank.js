// Constructor function for BankAccount
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; 
  }
  
  // Methods added to the BankAccount prototype
  BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log('Invalid deposit amount.');
    }
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (amount > 0 && this.balance >= amount) {
      this.balance += amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
      console.log('insufficient funds.');
    }
  };
  
  BankAccount.prototype.checkBalance = function() {
    console.log(`Account balance of ${this.name}: $${this.balance}`);
  };
  
  BankAccount.prototype.isActive = function() {
    return this.active;
  };
  
  // Function to calculate total balance of active accounts
  function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (let account of accounts) {
      if (account.isActive()) {
        totalBalance += account.balance;
      }
    }
    return totalBalance;
  }
  
  // multiple Creating BankAccount objects
  let account1 = new BankAccount(12214829, 'Kunj Pratap Singh', 'Savings', 1000);
  let account2 = new BankAccount(12457478, 'Lalit Sharma', 'Savings', 2000);
  let account3 = new BankAccount(12458569, 'Himanshu Pal', 'Savings', 1500);
  
  // Perform deposit, withdrawal, and balance check operations
  account1.deposit(500);
  account2.deposit(500);
  account3.deposit(200);

  account1.withdraw(300);
  account2.withdraw(200);
  account3.withdraw(800);

  
  
  account1.checkBalance();
  account2.checkBalance();
  account3.checkBalance();
  
  // isActive method
  console.log(`Is account1 active= ${account1.isActive()}`);
  console.log(`Is account2 active= ${account2.isActive()}`);
  console.log(`Is account3 active= ${account3.isActive()}`);
  
  // getTotalBalance function
  let accounts = [account1, account2, account3];
  let totalBalance = getTotalBalance(accounts);
  console.log(`Total balance of all active accounts: $${totalBalance}`);
   