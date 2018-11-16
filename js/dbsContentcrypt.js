class DbsContentcrypt {

    constructor() {
    }

    getRandomNumber(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    scrambleWord(word, difficulty) {
        // let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];
        let map = {
            'a':'b','b':'c','c':'d','d':'d','e':'f','f':'g','g':'h','h':'i','i':'j',
            'j':'k','k':'l','l':'m','m':'n','n':'o','o':'p','p':'q','q':'r','r':'s',
            's':'t','t':'u','u':'v','v':'w','w':'x','x':'y','y':'z','z':'a'
        };

        let newWord = "";
        for (let i =0; i < word.length; i++) {
            word = word.toLowerCase();
            let character = word[i];
            if (!map[character] || i % difficulty == 0) {
                newWord += character;
            } else {
                let shiftedCharacter = map[character];
                newWord += shiftedCharacter;
            }
        }
        return newWord;

        /*
        let wordLength = word.length;
        let newWord = "";
        let x = 0;
        for (x; x < wordLength; x++) {
            //newWord += "•";
            newWord += alphabet[getRandomNumber(alphabet.length)];
        }
        return newWord;
        */
    }

    scrambleText(text) {
        let words = text.split(" ");
        let scrambledWords = text.split(" ");
        let self = this;
            scrambledWords = words.map(function(word, index) {
                if(index % 2 == 0) {
                    return self.scrambleWord(word, 2);
                }
                return word;
        })
        return scrambledWords.join(" ");
    }

    scrambleImage(src) {
        return "https://loremflickr.com/320/240";
    }

    scrambleInnerNodes(parentNode) {
        if (parentNode.childNodes) {
            parentNode.childNodes.forEach(innerNode => {
                if (innerNode.nodeName == "#text") {
                    innerNode.data = this.scrambleText(innerNode.data);
                } else if(innerNode.nodeName == "IMG") {
                    innerNode.src = scrambleImage(innerNode.src);
                }

                this.scrambleInnerNodes(innerNode);
            });
        }
    }
}