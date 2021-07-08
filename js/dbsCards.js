/**
 * A card which can be flipped.
 */
class Card {
    /**
     * Creates a new Card instance.
     * The card contains a 'domElement' which innerHTML can be changed either
     * to the 'front'- or 'back'-innerHTML value.
     * @param {DOMElement} domElement The card container DOMElement
     * @param {string} front The innerHTML for the front side of the card
     * @param {string} back The innerHTML for the back side of the card
     */
    constructor(front, back) {
        this.front = front;
        this.back = back;
        this.isFlipped = false; // When 'true', the 'back' is shown.
        this.flippingTimeout = null;

        this.domElement = document.createElement('div');
        this.domElement.className = "gridDialogElement";
        this.domElement.style.gridRowStart = "2";
        this.domElement.style.transition = "all .3s ease";
        this.domElement.style.fontSize = "14px";
        this.domElement.style.lineHeight = "22px";
    }

    onMouseEnter() {
        if (this.isFlipped) {
            return;
        }
        this.isFlipped = true;   
        if (this.flippingTimeout) {
            clearTimeout(this.flippingTimeout);
            this.flippingTimeout = null;
        }
        this.show();
    }

    onMouseLeave() {
        if (!this.isFlipped || this.flippingTimeout) {
            return;
        }
        this.flippingTimeout = setTimeout(() =>
        { 
            this.isFlipped = false;
            this.flippingTimeout = null;
            this.show();
        }, 500);
    }

    /**
     * Sets the 'innerHTML' property of the 'domElement' to the innerHTML for the user-facing side.
     */
    show() {
        this.domElement.innerHTML = this.getCardFace();
        if (this.isFlipped) {
            this.domElement.style.transform = "rotateY(-180deg)";
        } else {
            this.domElement.style.transform = "rotateY(0)";
        }
    }

    /**
     * Gets the innerHTML for the currently user-facing side of the card.
     */
    getCardFace() {
        if (this.isFlipped) {
            return this.back;
        } else {
            return this.front;
        }
    }
}