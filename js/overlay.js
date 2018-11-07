function getOverlayHtml(content) {
    return  "<div id='overlay'>" +
                "<div class='content'>" +
                    content +
                    "<hr>" +
                    "<div id='answerType'></div>" + 
                    "<div id='questionElement'></div>" + 
                    "<div id='acceptedAnswer' style='overflow-y:auto;text-align:left;'>" +
                        "<div id='acceptedAnswerInner'></div>" +
                    "</div>" +
                    "<button id='acceptButton' disabled>okay, got it</button>" +
                "</div>" +
            "</div>";
}
// ###
// Fires randomly one of these text areas
let dbsAlertMessages = [
            "<h1><span>Read focused!</span></h1>" +
                "<p class='slogan'>Don`t waste your time looking up with stuff in the internet." +
                "<br>" +
                "Instead use your brain and spend your time with more meanfull things :-)</p>",

            "<h1><span>R T F M !</span></h1>" +
                "<p class='slogan'>Don`t be stupid fellow." +
                "<br>" +
                "Sometimes its helpfull to <b>R</b>ead <b>T</b>he <b>F</b>*king <b>M</b>anual :-)</p>",

            "<h1><span>Muhahahaha!</span></h1>" +
                "<p class='slogan'>Ouw! Its better waste my time on Social Media" +
                "<br></p>",
]

let style = // Adds all stlyes from the Overlaye
    "#questionElement {" +
        "width: 83%;" +
        "margin: 0 1%;" +
        "display: inline-flex;" +
        "font-size: 1.5em;" +
        "line-height: 66px;" +
        "letter-spacing: -1px;" +
        "white-space: nowrap;" +
        "overflow: hidden;" +
        "text-overflow: ellipsis;" +
    "}" +
    ".blurBody {" +
        "position: fixed;" +
        "width: 100%;" +
        "height: 100%;" +
        "background: rgba(255,255,255,0.98);" + 
        "animation: pulseBackground 4s infinite alternate;" +
        "height: 100%;" +
        "top: 0;" +
        "left: 0;" +
        "bottom: 0;" +
        "z-index: 9999;" +
    "}" +
    "hr {" + 
        "margin: unset !important;" + 
    "}" +
    "#overlay {" +
        "width:66%;" +
        "overflow-y: auto;" +
        "overflow-x: hidden;" +
        "animation: animateOverlay .5s 1 alternate;" +
        "margin: 0 auto;" +
        "background: linear-gradient(rgba(44,44,44,0.97), rgba(11,11,11,0.8));" +
        "top:1%;right:1%;" +
        "bottom:1%;left:1%;" +
        "z-index:99999;position:fixed;" +
        "padding:1em;" +
        "text-align:center;font-size:1.8em;" +
        "color:white;" +
        "box-shadow: 0 0 10vh rgba(255,255,255,0.995);" +
    "}" +
    "#acceptedAnswer {" +
        "max-height: auto;" +
    "}" +
    "#answerType {" +
        "width:15%;" +
        "display:inline-flex;" +
    "}" +
    "#answerType span.vote-accepted-on {" +
        "transform: scale(1.5);" +
        "position: relative;" +
        "top: 19px;" +
        "left: 14px;" +
        "margin: 0;" +
    "}" +
    "#answerType span {" +
        "float: left;" +
        "font-size: 2em;" +
        "line-height: 66px;" +
        "color: #0177cc;" +
    "}" +
    "#answerType span.vote-up-off {" +
        "left: 13px;" +
        "margin-top: 20px;" +
        "transform: scale(1);" +
    "}" +
    "#acceptedAnswerInner {" +
        "padding:0 12px 12px 12px;" +
        "border: 1px solid #187ccd;" +
        "background: rgba(255,255,255,0.8);" +
        "line-height: 20px;" +
        "overflow-x: auto;" +
    "}" +
    "#acceptedAnswerInner > pre {" +
        "font-size: 14px !important;" +
        "line-height: 18px !important;" +
        "margin: 0 auto;" +
        "text-align: left;" +
    "}" +
    "#acceptedAnswerInner > p {" +
        "font-size: 18px !important;" +
        "text-align: left;" +
        "color: #222;" +
    "}" +
    "#acceptedAnswerInner > ul > li {" +
        "font-size: 18px !important;" +
        "color: #111 !important;" +
    "}" +
    "#acceptedAnswerInner > p > code, #acceptedAnswerInner > ul > li > code {" +
        "color: #000 !important;" +
    "}" +
    ".content {" +
        "font-size: 18px;" +
        "filter: blur(0px) !important;" +
        "position: relative;" +
        "z-index: 1;" +
        "line-height: 33px;" +
    "}" +
    ".content h1 {" +
        "font-size: 3em;" +
        "line-height: 62px;" +
        "letter-spacing: -2px;" +
        "margin: 0 auto;" +
        "color: white;" +
        "font-weight: 600 !important;" +
    "}" +
    ".content h1 span {" +
        "font-family: Courier New;" +
    "}" +
    ".content p {" +
        "letter-spacing: -.4px;" +
        "line-height: 1.2em;" +
        "margin: 12px auto 0 auto;" +
    "}" +
    ".slogan {" +
        "font-family: Courier New;" +
        "text-align: center;" +
        "color: #FFF;" +
        "line-height: 33px !important;" +
        "font-size: 24px !important;" +
        "letter-spacing: -1.5px !important;" +
        "margin: 0 12px 12px 12px !important;" +
    "}" +
    "button {" +
        "opacity: 1 !important;" +
        "color:black;margin-top:20px;" +
        "font-size:26px;padding: 10px;" +
        "position: relative;" +
        "z-index: 9999;" +
        "transition: all .6s !important;" +
    "}" +
    "button:disabled {" +
        "opacity: .7 !important;" +
        "color: rgba(44,44,44,0.5) !important;" +
    "}" +
    "@-webkit-keyframes animateOverlay {" +
        "0% { -webkit-filter: blur(20px); transform: translateY(-100%); }" +
        "100% { -webkit-filter: blur(0px); transform: translateY(0); }" +
    "}" +
    "@-webkit-keyframes pulseBackground {" +
        "0% { background: rgba(255,0,122,0.9); }" +
        "100% { background: rgba(255,255,255,0.7); }" +
    "}" +
    "#acceptedAnswer h2 {" +
        "width: 50%;" +
        "font-family: Courier New !important;" +
        "font-size: 36px !important;" +
        "padding: 0 12px 6px 0;" +
        "margin: 0 auto !important;" +
        "text-align: center;" +
        "font-weight:600;" +
    "}"

let mainBody = document.body; // Add overlayed template before body
let span = document.createElement("span");
    span.innerHTML = "";
    span.className = "blurBody";
    mainBody.parentNode.insertBefore(span, mainBody); // Pushs the focusing Element before Overlay


let styleElement = document.createElement("style"); // Add a head style onto the overlayed body
    styleElement.type = "text/css";
    styleElement.appendChild(document.createTextNode(style));
    document.getElementsByTagName("head")[0].appendChild(styleElement);

let randomIndex = Math.floor(Math.random() * Math.floor(dbsAlertMessages.length)); // Generates a random number
let randomMessage = dbsAlertMessages[randomIndex]; // Choose randomly one of the thre text areas

    document.body.innerHTML += getOverlayHtml(randomMessage); // Add overlayed template before body

// Loops trough all anwers on the page and extracts the one with the highest votes.
function getHighestVotedAnswer() {
    let allAnswers = document.querySelectorAll(".answer");
    if (allAnswers.length == 0) {
        return null;
    }

    let result = {
        voteCount: 0,
        innerHTML: ''
    };

    allAnswers.forEach(o => {
        let currentAnswer = o; 

        let firstLevelDiv = currentAnswer.getElementsByTagName("div")[0];
        let voteBarLeft = firstLevelDiv.getElementsByTagName("div")[1];
        let contentDiv = firstLevelDiv.getElementsByTagName("div")[2];

        let votes = voteBarLeft.getElementsByTagName("span")[0];
        let voteNumber = parseInt(votes.innerText.trim());

        if (result.voteCount < voteNumber) {
            result.voteCount = voteNumber;
            result.innerHTML = contentDiv.children[0].innerHTML;
        }
    }); 
    return result;
}

function getAcceptedAnswer() {
    let accepetedDomElement = document.querySelectorAll(".accepted-answer .post-text");
    if (accepetedDomElement.length == 0) {
        return null;
    } else {
        return accepetedDomElement[0];
    }
}

function getQuestion() {
    let getQuestionValue = document.getElementsByClassName("question-hyperlink");
    let questionElement = document.getElementById("questionElement");
    if (getQuestionValue) {
        questionElement.innerHTML = getQuestionValue[0].innerHTML;
    }
}

function reStyleAcceptedAnswer(accepetedDomElement) {
    let eStyle = accepetedDomElement.style;
        eStyle.margin = "0 auto";
        eStyle.width = "100%";
        eStyle.padding = "18px";
        eStyle.border = "1px solid grey";
        eStyle.overflowY = "auto";

    let accepetedDomCodeElement = document.getElementsByTagName("code");
        for (i = 0; i < accepetedDomCodeElement.length; i++) {
            accepetedDomCodeElement[i].style.color = "black";
    }
}

chrome.storage.sync.get(document.location, function (pageMetadata) {
    // Display the accepted answer from so in the overlayer
    let acceptedAnswerOverlayElement = document.getElementById("acceptedAnswerInner");

    // On this Selector: checks while loading the Answertype and display it in id=answerTitle
    let answerSelector = document.getElementById("answerType");

    // Fires the highest voted answer if no accepted answer avaiable
    let highestVotedAnswer = getHighestVotedAnswer();
    let question = getQuestion();
    if (highestVotedAnswer) {
        pageMetadata.highestPointAnswer = highestVotedAnswer.innerHTML; // highest voted answer HTML
        acceptedAnswerOverlayElement.innerHTML = pageMetadata.highestPointAnswer;
        answerSelector.innerHTML = "<span>" + highestVotedAnswer.voteCount + "</span><span class='vote-up-off'>up vote</span>"
    }

    // Fires the accepted answer if avaiable
    let accepetedDomElement = getAcceptedAnswer();
    if (accepetedDomElement) {
        reStyleAcceptedAnswer(accepetedDomElement);
        pageMetadata.acceptedAnswer = accepetedDomElement.innerHTML; // accepted answer HTML
        acceptedAnswerOverlayElement.innerHTML = pageMetadata.acceptedAnswer;
        answerSelector.innerHTML = "<span class='vote-accepted-on load-accepted-answer-date'>accepted</span>";
    }

    chrome.storage.sync.set(pageMetadata); // Store to the database with the url as key
});

let overlayElement = document.getElementById("overlay");
let acceptButtonElement = document.getElementById("acceptButton");

// Deactivates the button for 5 seconds
setTimeout(function () {
    document.getElementById("acceptButton").disabled = false;
}, 7000);

// Counts the numeric value inside the button to 0
function countUpValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
            acceptButtonElement.innerHTML = "okay, got it!";
        }
    }, stepTime);
}
countUpValue("acceptButton", 7, 0, 7000);

// Close the overlay box over the open tab
acceptButtonElement.onclick = (e) => {
    overlayElement.remove();
    span.remove();
};