class SoParser {
    /**
     * Creates a new instance of the StackOverflow parser.
     * @param {DomElement} body The "document.body" of the stackoverflow page 
     */
    constructor(body) {
        this.body = body;
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
        let sideBars =  this.getSidebars();
        let s = sideBars;
        s.sidebarLeftSo.style.filter = "unset";
        s.sidebarRightSo.style.filter = "unset";
        s.sidebarLeftSo.classList.remove("blurred");   
        s.sidebarRightSo.classList.remove("blurred"); 
    }

    getQuestion() {
        let question = new SoQuestion();
        question.author = "";
        question.innerHtml = "";
        question.comments = [
            new SoComment(),
            new SoComment()
        ];
        question.tags = [
            new SoTag(),
            new SoTag(),
            new SoTag(),
            new SoTag(),
            new SoTag()
        ]
        return question;
    }

    /**
     * Reads all answer elements from the so page
     */
    getAllAnswers() {
        let answers = [];

        // Ließ die Antworten aus dem "this.body" property
        // ....
        for(let i = 0; i < 10; i++) {

            let currentAnswer = new SoAnswer();

            currentAnswer.author = i.toString() ; //...
            currentAnswer.voteCount = i.toString() ; //...
            currentAnswer.innerHtml = i.toString() ; //...
            currentAnswer.isAccepted = i == 0; //...

            let currentAnswerComment1 =  new SoComment();
            currentAnswerComment1.author = i.toString();
            currentAnswerComment1.innerHtml = "answer " + i.toString() + " - comment 1";

            let currentAnswerComment2 =  new SoComment();
            currentAnswerComment2.author = i.toString();
            currentAnswerComment2.innerHtml = "answer " + i.toString() + " - comment 1";

            currentAnswer.comments = [
                currentAnswerComment1,
                currentAnswerComment2
            ];
            
            answers.push(currentAnswer);
        }

        return answers; 
    }
}