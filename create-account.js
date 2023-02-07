// User creates an account by calling the function and passing in the initial values. 
// If a user needs to use the methods: 
// let exampleAccount = createAccount('1234', 100);
// to call methosd: exampleAccount.checkBalance('1234');

function createAccount(pin, amount = 0) {

  let obj = {
    checkBalance(givenPin) {
      if (givenPin === pin) {
        return `$${amount}`;
      } else {
        return `Invalid PIN.`;
      };
    },
    deposit(givenPin, depAmount) {
      if (givenPin === pin) {
        amount += depAmount;
        return `Succesfully deposited $${depAmount}. Current balance: $${amount}.`;
      } else {
        return `Invalid PIN.`;
      }
    },
    withdraw(givenPin, withAmt) {
      if (givenPin !== pin) return `Invalid PIN.`;
      if (withAmt > amount) {
        return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
      } else {
        amount -= withAmt;
        return `Succesfully withdrew $${withAmt}. Current balance: $${amount}.`;
      };
    },
    changePin(givenPin, newPin) {
      if (givenPin !== pin) return `Invalid PIN.`;

      pin = newPin;
      return `PIN successfully changed!`;
    }
  }

  return obj;
}


module.exports = { createAccount };

// Return value looks like this:
// {
//   checkBalance: [Function: checkBalance],
//   deposit: [Function: deposit],
//   withdraw: [Function: withdraw],
//   changePin: [Function: changePin]
// }

