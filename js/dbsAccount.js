
class DbsAccount {
    constructor() {
        this.balance = 500;

        // Writes the chrome storage Wallet from Local Storage
        chrome.storage.sync.get("_account", function (accountObj) {
            let storedBalance = accountObj._account.balance;
            if (storedBalance) {
                this.balance = storedBalance;
                return;
            }
        
            // The plugin was started for the first time, set the default values
            chrome.storage.sync.set({
                "_account": {
                    balance: this.balance
                }
            });
        });
    }

    deposit(amount) {
        this.balance += amount;
        /*
        chrome.storage.sync.set({
            "_account": {
                balance: this.balance
            }
        });
        */
    }

    withdraw(amount) {
        this.balance -= amount;
        /*
        chrome.storage.sync.set({
            "_account": {
                balance: this.balance
            }
        });
        */
    }
}