class SoApi {
    /**
     * Creates a new instance of the StackOverflow parser.
     * @param {DomElement} body The "document.body" of the stackoverflow page 
     */
    constructor(body) {
        this.body = body;let imgSrv = "https://diekommune.de.cool/";
        this.logoImagePaths = [
            imgSrv + "0.svg", // original
            imgSrv + "1.svg", // empty eyes 
            imgSrv + "2.svg", // eyes closed mouth open
            imgSrv + "3.svg", // smirking eyes open
            imgSrv + "4.svg" // both closed
        ];
    }

    getRandomImagePath() {
        let imageIndex = Math.floor(Math.random() * Math.floor(this.logoImagePaths.length));
        return this.logoImagePaths[imageIndex];
    }

    getDialogElement() {
        let dialogElement = document.getElementById("drDoucheDialog");
        return dialogElement;
    }

    appendBody() {
        let mainBody = document.body; // Add overlayed template before body
        let span = document.createElement("span");
            span.innerHTML = "";
            span.className = "dbsBody";
            mainBody.parentNode.insertBefore(span, mainBody); // Pushs the focusing Element before Overlay
    }

    getDisplayAnswer() {
        // Finds the highest voted answers if no accepted answer avaiable
        let highestVotedAnswer = getHighestVotedAnswer();
        // Finds the accepted answers if avaiable
        let accepetedDomElement = getAcceptedAnswer();
        // Proofes whether the Objects are correctly setted
        let displayAnswer = accepetedDomElement;
        if (!accepetedDomElement || accepetedDomElement.voteCount < highestVotedAnswer.voteCount) {
            displayAnswer = highestVotedAnswer;
        }
        return displayAnswer;
    }

    createCloseButton() {
        let dbsButton = document.createElement("button");
        dbsButton.disabled = true;
        dbsButton.id = "acceptButton";
        let counter = 5;
        // Deactivates the button and counts to 0
        let interval = setInterval(o => {
            dbsButton.innerHTML = counter;
            counter--;
            if (counter == 0) {
                clearInterval(interval);
            }
        },1000);

        // Deactivates the button for 5 seconds
        setTimeout(function () {
            dbsButton.innerHTML  = "okay, got it!";
            dbsButton.disabled = false;
        }, 6000);
        // Close the overlayered box over the open tab
        dbsButton.onclick = (e) => {
            this.unBlurSidebars();
            // Selects the navigation header
            let dbsNavbar = document.getElementById("dbsNavbar");
                dbsNavbar.className = dbsNavbar.className !== "top-bar show" ? "top-bar show" : "top-bar hide";
            let dbsNavStyle = dbsNavbar.style;
                dbsContainer.style.display = "none";

            if (dbsNavbar.className == "top-bar show") {
                dbsNavStyle.display = "block";
                dbsNavStyle.transform = "translateY(0)";
                // window.setTimeout(function(){
                dbsNavStyle.opacity = 1;
                dbsContainer.style.opacity = 1;
                dbsContainer.style.display = "block";
                //},0); 
            }
            if (dbsNavbar.className == "top-bar hide") {
                dbsNavStyle.transform = "translateY(-90px)";
                dbsNavStyle.opacity = 0;
                dbsContainer.style.opacity = 0;
                window.setTimeout(function () {
                    dbsNavStyle.display = "none";
                }, 5000); // timed to match animation-duration
            }
        };
        return dbsButton;
    }

    drDoucheDialogMode() {
        // Close the dialog inside navigation after X seconds
        let self = this;
        let dialogElement = this.getDialogElement();

        setTimeout(function () {
        let closeButton = self.createCloseButton();
            dialogElement.innerHTML = "";
            dialogElement.appendChild(closeButton);
        }, 5000);
    }

    insertLogoWrapper() {
        let logoWrapper = document.getElementById("logoWrapper");
        let logo = this.getLogo();

        let src = logo.src;
        let imageIndex = this.logoImagePaths.indexOf(src);
        // Append the rolling eye container into child-page Logo when logo.src is the second

        logoWrapper.innerHTML = "";
        logoWrapper.appendChild(logo);

        if (imageIndex  == 1) {
            let eyeWrapper = this.createRollEyes();
                logoWrapper.appendChild(eyeWrapper);
        }

        return logoWrapper;
    }
    getLogo() {
        // Creates the logo element
        let logoImagePath = this.getRandomImagePath();
        let logoImgElement = document.createElement("img");
            logoImgElement.id = "dbsLogo";
            logoImgElement.src = logoImagePath;

        let i = this.logoImagePaths.indexOf(logoImagePath);

        logoImgElement.onclick = () => {
            // Get the index of the next image
            if (i == this.logoImagePaths.length - 1) {
                i = 0;
            }
            i = i + 1;

            // Clear the logoWrapper DOM element
            logoWrapper.innerHTML = "";

            // Append the new logo (with the new path)
            logoImgElement.src = this.logoImagePaths[i];
            logoWrapper.appendChild(logoImgElement);

            // Append the eyes if nessecarry
            if (i == 1) {
                let eyeWrapper = this.createRollEyes();
                logoWrapper.appendChild(eyeWrapper);
            }

            let self = this;
            if (i == 2) {
                setTimeout(function () {
                    logoImgElement.src = self.logoImagePaths[0];
                }, 1200);
                clearTimeout();
            } 
        };
        
        return logoImgElement;
    }

    // Creates and append into the logoWrapper the rolling eye container
    createRollEyes() {
        let eyeWrapper = document.createElement("span");
        eyeWrapper.id = "rollingEyes";
        eyeWrapper.innerHTML =
            "<span class='ball rotateEyeLeft'>.</span>" +
            "<span class='ball rotateEyeRight'>.</span>";
        setTimeout(function () {
            eyeWrapper.style.display = "block";
        }, 3);
        return eyeWrapper;
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
        let answers = [];

        // Ließ die Antworten aus dem "this.body" property
        // ....
        for (let i = 0; i < 10; i++) {

            let currentAnswer = new SoAnswer();
            currentAnswer.author = i.toString(); //...
            currentAnswer.voteCount = i.toString(); //...
            currentAnswer.innerHtml = i.toString(); //...
            currentAnswer.isAccepted = i == 0; //...
            currentAnswer.voteBar = i == 0; //...

            let currentAnswerComment1 = new SoComment();
            currentAnswerComment1.author = i.toString();
            currentAnswerComment1.innerHtml = "answer " + i.toString() + " - comment 1";

            let currentAnswerComment2 = new SoComment();
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