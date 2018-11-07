function getOverlayHtml(message, answer) {
    // Appends the following element into the body of stackoverflow
    let html =
    "<header id='dbsNavbar' class='top-bar'>" +
        "<div class='-container'>" +
            "<div class='dbsHead'>" +
                "<a href='#' class='left-sidebar-toggle p0 js-left-sidebar-toggle'>" +
                    "<a href='https://dont-be-stup.id'>" +
                        "<img class='dbsLogo' src='https://s4.aconvert.com/convert/p3r68-cdx67/cbmrn-wpmsx.svg' />" +
                    "</a>" +
                "</a>" +
            "</div>" +
        "</div>" +
    "</header>" +
       
    "<div class='container dbsContainer'>" +
        "<div id='left-sidebar' data-is-here-when='md lg' class='left-sidebar js-pinned-left-sidebar'>" +
            "<div class='left-sidebar--sticky-container js-sticky-leftnav'>left</div>" +
        "</div>" +
            "<div id='content' style='background: transparent;' class='snippet-hidden'>" +
                "<div id='dbsOverlay'>" +
                    "<div class='inner-content clearfix'>" +
                        "<div id='question-header' class='grid'>" + 
                            message +
                        "</div>" +
                        "<div id='mainbar' role='main'>" +
                            "<div class='question' id='question'>" +
                                "<div class='post-layout'>" + 
                                    /* "<div class='votecell post-layout--left'>" +
                                        "<div class='vote'>" +
                                            "<a class='vote-up-off'>up vote</a>" +
                                            "<span class='vote-count-post'></span>" +
                                        "</div>" +
                                    "</div>" + */
                                    "<div class='postcell post-layout--right'>" +
                                        "<div class='post-text'>" +
                                            answer +
                                        "</div>" +
                                        "<div class='post-taglist grid gs4 gsy fd-column'>" +
                                            "<div class='grid ps-relative d-block'>" +
                                                "<a href='/questions/tagged/html' class='post-tag js-gps-track' rel='tag'></a>" +
                                            "</div>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div class='post-layout--right'>" +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                        "<div id='sidebar' class='show-votes' role='complementary'>" +
                            "Right" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>" + 
        "</div>";
    return html;
}

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
    let accepetedDomElement = document.querySelectorAll(".accepted-answer");
    if (accepetedDomElement.length == 0) {
        return null;
    } else {
        return accepetedDomElement[0];
    }
}

function getQuestion() {
    let getQuestionValue = document.getElementsByClassName("question-hyperlink");
    if (getQuestionValue) {
        return getQuestionValue[0].innerHTML;
    }
}

// Fires randomly one of these text areas
let dbsAlertMessages = [
    "<h1 class='dbsPushMessageTitle grid--cell fs-headline1 fl1'>" +
        "<a href='#' class='question-hyperlink'>Read focused!</a>" +
    "</h1>" +
        "<p class='dbsPushMessage'>Don`t waste your time looking up with stuff in the internet." +
        "<br>" +
        "Instead use your brain and spend your time with more meanfull things :-)</p>",

    "<h1 class='dbsPushMessageTitle grid--cell fs-headline1 fl1'>" +
        "<a href='#' class='question-hyperlink'>R T F M !</a>" +
    "</h1>" +
    "<p class='dbsPushMessage'>Don`t be stupid fellow." +
    "<br>" +
    "Sometimes its helpfull to <b>R</b>ead <b>T</b>he <b>F</b>*king <b>M</b>anual :-)</p>",

    "<h1 class='dbsPushMessageTitle grid--cell fs-headline1 fl1'>" +
        "<a href='#' class='question-hyperlink'>Muhahahaha!</a>" +
    "</h1>" +
    "<p class='dbsPushMessage'>Ouw! Its better waste my time on Social Media" +
    "<br></p>"
]

let style =
    "body {" + 
        "position: absolute;" + 
        "flex-direction: column;" + 
        "background-color: #FFF;" + 
        "background-image: none;" + 
        "background-position: top left;" + 
        "background-repeat: repeat;" + 
        "background-size: auto;" + 
        "background-attachment: auto;" + 
        "min-width: 1279px;" + 
        "padding-top:50px;" + 
    "}" +
    "body > .container {" + 
        "max-width: 1264px;" +
        "width: 100%;" +
        "background: none;" +
        "display: flex;" +
        "justify-content: space-between;" +
        "margin: 0 auto;" +
    "}" +
    "h1.dbsPushMessageTitle {" +
        "margin-bottom: 0 !important;" +
    "}" +
    "h1.dbsPushMessageTitle a {" +
        "margin-bottom: 0 !important;" +
        "font-size: 46px !important;" +
        "line-height: 1;" +
        "display: inline-table;" +
        "margin-top: -9px;" +
    "}" +
    "p.dbsPushMessage {" +
        "font-size: 1.4em;" +
        "line-height: 22px;" +
        "margin: 0 auto;" +
        "width: 56%;" +
        "text-align: right;" +
        "background: white !important;" +
        "color: #666;" +
    "}" +
    "body .top-bar~.container {" + 
        "margin: 0 43.5px; !important;" + 
    "}" +
    ".blurBody {" +
        "position: absolute;" +
        "width: 55.8%;" +
        "height: 100vh;" +
        "background: rgba(255,255,255,0.98);" +
        "animation: pulseBackground 12s 0 alternate;" +
        "top: 0;" +
        "left: 208px;" +
        "right: 15%;" +
        "bottom: 0;" +
        "z-index: 1051;" +
    "}" +
    "#dbsNavbar {" +
        "position: fixed;" +
        "top: 0;" +
        "left: 0;" +
        "width: 100%;" +
        "z-index: 1053;" +
        "background-color: #333333;" +
        "transition: box-shadow cubic-bezier(.165, .84, .44, 1) .25s;" +
        "height: 51px;" +
        "box-sizing: border-box;" +
        "animation: animateNavbar .2s 1 ease-in;" +
    "}" +
    ".dbsLogo {" +
        "text-align: left;" +
        "width: 78px;" +
        "margin: 34px 0 0 19px;" +
        "border: 4px solid #333333;" +
        "animation: showLogo .5s 1 ease-in;" +
    "}" +
    ".dbsHead {" +
        "text-align:center;font-family: Courier New;" +
    "}" +
    ".dbsContainer {" +
        "display: flex;" +
        "margin: 0 43.5px !important;" +
        "position: absolute;" +
        "top: 50px;" +
        "left: 0;" +
        "right: 0;" +
        "bottom: 0;" +
        "z-index: 1052;" +
    "}" +
    "#dbsOverlay {" +
        "animation: animateOverlay .5s 1 alternate;" +
    "}" +
    "#left-sidebar, #sidebar {" + 
        "filter: blur(5px);" +
        "height: 84vh;" +
        "animation: blurSidebars .5s 1 alternate;" +
    "}" +
    "@-webkit-keyframes showLogo {" +
        "0% { transform: scale(0); }" +
        "100% { transform: scale(1); }" +
    "}";
    "@-webkit-keyframes blurSidebars {" +
        "0% { filter: blur(0); }" +
        "100% { filter: blur(5px); }" +
    "}" +
    "@-webkit-keyframes animateOverlay {" +
        "0% { -webkit-filter: blur(5px); transform: translateY(-100%); }" +
        "100% { -webkit-filter: blur(0); transform: translateY(0); }" +
    "}" +
    "@-webkit-keyframes animateNavbar {" +
        "0% { transform: translateY(-51px); }" +
        "100% { transform: translateY(0); }" +
    "}" +
    "@-webkit-keyframes pulseBackground {" +
        "0% { background: rgba(122,122,122,0.9); }" +
        "100% { background: rgba(255,255,255,0.9); }" +
    "}";

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

// Fires the highest voted answer if no accepted answer avaiable
let highestVotedAnswer = getHighestVotedAnswer();

// Fires the accepted answer if avaiable
let accepetedDomElement = getAcceptedAnswer();

let displayAnswer = accepetedDomElement;
if (!accepetedDomElement) {
    displayAnswer = highestVotedAnswer;
}

let overlayHtml = getOverlayHtml(randomMessage, displayAnswer.innerHTML);
    document.body.innerHTML += overlayHtml;

// Delete original question-header 
    //*[@id="question-header"]

    /* // Deactivates the button and counts to 0
    let counter = 5;
    let interval = setInterval(o => {
        dbsButton.innerHTML = counter;
        counter--;
        if (counter == 0) {
            clearInterval(timer);
            dbsButton.innerHTML = "okay, got it!";
        }
    }, 1000);

    // Deactivates the button for 5 seconds
    setTimeout(function () {
        document.getElementById("acceptButton").disabled = false;
    }, 5000);

    // Close the overlay box over the open tab
    dbsButton.onclick = (e) => {
        overlayElement.remove();
        span.remove();
    }; */