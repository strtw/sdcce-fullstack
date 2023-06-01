// Part 1 - The UI
window.addEventListener("load", () => {
  // Button event listeners
  document.getElementById("name").addEventListener("click", getName);
  document.getElementById("deposit").addEventListener("click", depositAmount);
  document.getElementById("withdrawal").addEventListener("click", withdrawalAmount);
})

// Prompt user for their name
function getName() {
    const ownerName = prompt("What is your name?");
    bankAccount = bankAccount(ownerName);
    bankAccount.setOwnerName(ownerName);
  }
  
  // Prompt user for deposit amount
  function depositAmount() {
    const amount = parseFloat(prompt("Enter the amount to deposit:"));
    bankAccount.deposit(amount);
  }
  
  // Prompt user for withdrawal amount
  function withdrawalAmount() {
    const amount = parseFloat(prompt("Enter the amount to withdraw:"));
    bankAccount.withdrawal(amount);
  }
  
  // Display user's name and balance
  function displayOutput(string) {
    const output = document.getElementById("output");
    output.textContent = bankAccount.getOwnerName() + " " + string;
  }
  
  // Part 2 - The Closure Function
  
  function bankAccount(ownerName) {
    let balance = 0;
    let owner = ownerName;
  
    return {
      withdrawal: function(withdrawalAmount) {
        if (withdrawalAmount <= 0 || withdrawalAmount > balance) {
          displayOutput("Invalid withdrawal amount.");
        } else {
          balance -= withdrawalAmount;
          displayOutput(`You withdrew $${withdrawalAmount}. Your new balance is $${balance}.`);
        }
      },
      deposit: function(depositAmount) {
        if (depositAmount <= 0) {
          displayOutput("Invalid deposit amount.");
        } else {
          balance += depositAmount;
          displayOutput(`You deposited $${depositAmount}. Your new balance is $${balance}.`);
        }
      },
      getBalance: function() {
        displayOutput(`Your balance is $${balance}.`);
      },
      getOwnerName: function() {
        return owner;
      }
    };
  }
  

  
  