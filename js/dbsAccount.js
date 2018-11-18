
class DbsAccount {
    constructor() {
        this.balance = 500;
        this.loaded = null;

        let self = this;

        // Writes the chrome storage Wallet from Local Storage
        chrome.storage.sync.get("_account", function (accountObj) {
            if (accountObj._account && accountObj._account.balance) {
                self.balance = accountObj._account.balance;

                if (self.loaded) {
                    self.loaded();
                }
                return;
            }
        
            // The plugin was started for the first time, set the default values
            chrome.storage.sync.set({
                "_account": {
                    balance: self.balance
                }
            });

            if (self.loaded) {
                self.loaded();
            }
        });
    }

    deposit(amount) {
        let element = this.createWalletAnimation(amount);
            element.style.background = "green";
        this.createWalletAnimation(amount);
        this.balance += amount;
        chrome.storage.sync.set({
            "_account": {
                balance: this.balance
            }
        });
    }

    withdraw(amount) {
        let element = this.createWalletAnimation(amount);
            element.style.background = "red";
        this.balance -= amount;
        chrome.storage.sync.set({
            "_account": {
                balance: this.balance
            }
        });
    }

    createWalletAnimation(amount) {
        let animationElement = document.createElement("span");
            animationElement.id = "stupiDollarVal";
            animationElement.style.fontSize = "16px";
            animationElement.innerHTML = amount;

        let dialogElement = document.getElementById("drDoucheDialog");
            dialogElement.appendChild(animationElement);

        return animationElement;
    }
}