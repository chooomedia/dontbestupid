class SoApi {
    /**
     * Creates a new instance of the StackOverflow parser.
     * @param {DomElement} body The "document.body" of the stackoverflow page 
     */
    constructor(body) {
        this.body = body;
        this._cryptClass = new DbsContentcrypt();
    }

    getHighestVotedAnswer() {
        let allAnswers = this.getAllAnswers();
        let maxVotedAnswer = {};

        allAnswers.forEach(answers => {
            if (!maxVotedAnswer.voteCount || answers.voteCount > maxVotedAnswer.voteCount) {
                maxVotedAnswer = answers;
            }
        });

        return maxVotedAnswer;
    }

    getAcceptedAnswer() {
        let allAnswers = this.getAllAnswers();
        let acceptedAnswers = allAnswers.filter(answers => answers.classes.indexOf("accepted-answer") > -1);
        if (acceptedAnswers.length == 0){
            return null;
        }
        
        return acceptedAnswers[0];
    }

    getDisplayAnswer() {
        // Finds the highest voted answers if no accepted answer avaiable
        let highestVotedAnswer = this.getHighestVotedAnswer();
        // Finds the accepted answers if avaiable
        let accepetedDomElement = this.getAcceptedAnswer();
        // Proofes whether the Objects are correctly setted
        let displayAnswer = accepetedDomElement;
        if (!accepetedDomElement || accepetedDomElement.voteCount < highestVotedAnswer.voteCount) {
            displayAnswer = highestVotedAnswer;
        }
        return displayAnswer;
    }

    getDisplayAnswerFromStorage() {
        chrome.storage.sync.get(soUrl, function (pageMetadata) {
            if (!pageMetadata) {
                return;
            } 
            callback(pageMetadata);
            // console.log(pageMetadata[soUrl]);
        });
    }

    getSidebars() {
        let sidebarLeftSo = document.getElementById("left-sidebar");
        let sidebarRightSo = document.getElementById("sidebar");
        return {
            sidebarLeftSo: sidebarLeftSo,
            sidebarRightSo: sidebarRightSo
        };
    }

    blurSidebars() {
        let sideBars = this.getSidebars();
        let s = sideBars;
            s.sidebarLeftSo.style.filter = "blur(7px)";
            s.sidebarLeftSo.style.transition = "filter .6s ease-in";
            s.sidebarRightSo.style.filter = "blur(7px)";
            s.sidebarRightSo.style.transition = "filter .6s ease-out";
            s.sidebarLeftSo.classList.add("blurred");
            s.sidebarRightSo.classList.add("blurred");
    }

    unBlurSidebars() {
        let sideBars = this.getSidebars();
        let s = sideBars;
        s.sidebarLeftSo.style.filter = "unset";
        s.sidebarRightSo.style.filter = "unset";
        s.sidebarLeftSo.classList.remove("blurred");
        s.sidebarRightSo.classList.remove("blurred");
    }

    getQuestion() {
        let questionElement = document.getElementById("question-header")
        let questionElementTitle = document.getElementsByClassName("question-hyperlink")[0];
        let questionElemenTags = document.getElementsByClassName("post-taglist")[0];
        let questionElements = {
            innerHTML: questionElement.innerHTML,
            title: questionElementTitle.innerHTML,
            tags: questionElemenTags.innerHTML,
        };
        return questionElements;
    }

    /**
     * Reads all answer elements from the so page
     */
    getAllAnswers() {
        let allAnswers = document.querySelectorAll(".answer");
        if (allAnswers.length == 0) {
            return [];
        }

        let htmlElementAnswersArray = Array.from(allAnswers);
    
        function convertHtmlAnswerToSoAnswerObject (answerHtmlElement) {
            let firstLevelDiv = answerHtmlElement.getElementsByTagName("div")[0];
            let voteBarLeft = firstLevelDiv.getElementsByTagName("div")[1];
            let contentDiv = firstLevelDiv.getElementsByTagName("div")[2];
            let votes = voteBarLeft.getElementsByTagName("span")[0];
            // let tagsArray = Array.from(answerHtmlElement.getElementsByClassName("post-tag"));
            let voteCount = parseInt(votes.innerText.trim());
    
            let soAnswer = new SoAnswer();
            soAnswer.author = null;
            soAnswer.voteCount = voteCount;
            soAnswer.classes = Array.from(answerHtmlElement.classList);
            soAnswer.innerHtml = contentDiv.children[0].innerHTML;
            soAnswer.isAccepted = null;
            soAnswer.voteBar = voteBarLeft.innerHTML;

            return soAnswer;
        };

        let self =  this;    
        let soAnswersArray = htmlElementAnswersArray.map(convertHtmlAnswerToSoAnswerObject);

        let soAnswersCrypted = soAnswersArray.forEach(function(element) {
            let innerContent = element.innerHTML;
            return self._cryptClass.scrambleInnerNodes(innerContent);
        });

        return soAnswersCrypted;
    }    
}