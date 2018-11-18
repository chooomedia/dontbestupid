
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


    createWalletAnimation(amount, color) {
        let animationElement = document.getElementById("dbsWalletValue");
            animationElement.classList.add("animateValue");
            animationElement.style.fontSize = "16px"; 
            animationElement.style.fontWeight = "600"; 

            if (color == "red") {
                animationElement.innerHTML = "- " + amount;
            } else {
                animationElement.innerHTML = "+ " + amount;
            }
            animationElement.style.color = color;

        return animationElement;
    }

    deposit(amount) {
        this.createWalletAnimation(amount, "green");
        this.createWalletAnimation(amount);
        this.balance += amount;
        chrome.storage.sync.set({
            "_account": {
                balance: this.balance
            }
        });
    }

    withdraw(amount) {
        this.createWalletAnimation(amount, "red");
        this.balance -= amount;
        chrome.storage.sync.set({
            "_account": {
                balance: this.balance
            }
        });
    }
}