class CardStack {
    constructor(options) {
        this.options = options;
        this.cards = [];
        // Dieses DOM Element enthält später (nach Aufruf von 'addCard(card)') alle hinzugefügten Karten.
        
        this.innerDialogElement = document.createElement("div");
        this.innerDialogElement.className = "innerDialog";
        this.innerDialogElement.style.minWidth = "767px";
        this.innerDialogElement.style.display = "grid"; 
        this.innerDialogElement.style.gridTemplateColumns = "repeat(2, 1fr)";
        this.innerDialogElement.style.fontSize = "18px";

        document.onmousemove = (event) => {
            let elementAtMousePosition = document.elementFromPoint(event.x, event.y);
            if (!elementAtMousePosition) {
                return;
            }

            this.cards.forEach(card => {
                let current = elementAtMousePosition;
                while (current) {
                    if (current == card.domElement) {
                        card.onMouseEnter();
                        break;
                    }
                    if (current == this.innerDialogElement) {
                        current = null;
                        break;
                    }
                    current = current.parentElement;
                }
                if (!current) {
                    card.onMouseLeave();
                }
            });
        };
    }

    /**
     * Adds a new card to the stack and creates a 'div' element for it.
     * The created 'div' is then appended under the CardStack's 'containerDomElement'.
     * @param {Card} card The card definition (front- and back-html)
     */
    addCard(card) {
        if (this.options && this.options.itemHeight) {
            card.domElement.style.minHeight = this.options.itemHeight;
        }
        
        card.show();
        this.cards.push(card);
        this.innerDialogElement.appendChild(card.domElement);
        let cardColumns = [];
        for (let i = 0; i < this.innerDialogElement.childElementCount; i++) {
            cardColumns.push("auto");
        }
        this.innerDialogElement.style.gridTemplateColumns = cardColumns.join(" ");
    }

    getCard(index) {
        return this.cards[index];
    }
}