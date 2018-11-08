function getOverlayHtml(logo, message, answer) {
    // Appends the following element into the body of stackoverflow
    let html =
    "<header id='dbsNavbar' class='top-bar' style='border-top:unset;'>" +
        "<div class='-container'>" +
            "<div class='dbsHead'>" +
                "<a href='#' class='left-sidebar-toggle p0 js-left-sidebar-toggle'>" +
                    "<a id='logoWrapper' href='https://dont-be-stup.id'>" +
                        "<img id='dbsLogo' src='"+ logo +"' />" +
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
                        "<div id='mainbar' role='main' style='box-shadow: 9px 12px 28px rgba(55,55,55,0.1);'>" +
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
        "box-shadow: 0px 3px 6px #888888;" +
        "transition: box-shadow cubic-bezier(.165, .84, .44, 1) .25s;" +
        "height: 51px;" +
        "box-sizing: border-box;" +
        "animation: animateNavbar .2s 1 ease-in;" +
    "}" +
    "#dbsLogo {" +
        "background: url(https://cdn.dribbble.com/users/1065420/screenshots/3933364/gary-big-eyes.gif);" +
        "animation: showLogo .5s 1 ease-in;" +
        "background-size: 136% 89%;" +
        "background-position: -6px -22px;" +
        "text-align: left;" +
        "width: 90px;" +
        "margin: 49px 0 0 19px;" +
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
    ".ball {" + 
        "position: absolute;" +
        "color: #000 !important;" +
        "font-size: 40px !important;" +
        "top: 18px;" +
        "width: 24px;" +
        "height: 24px;" +
        "line-height: 45px;" +
    "}" +
    ".rotateEyeLeft {" + 
        "position: absolute;" +
        "animation: rotateEyeLeft 2s 3 alternate;" +
    "}" +
    ".rotateEyeRight {" + 
        "position: absolute;" +
        "animation: rotateEyeRight 2s 3 ease-in;" +
    "}" +
    
    "@-webkit-keyframes blurSidebars {" +
        "0% { filter: translateZ(-100px); }" +
        "100% { filter: translateZ(0); }" +
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
    "}" +
    "@-webkit-keyframes showLogo {" +
        "0% { transform: scale(0); }" +
        "100% { transform: scale(1); }" +
    "}" +
    "@-webkit-keyframes rotateLeft {" +
        "0% { transform: scale(360deg); }" +
        "100% { transform: scale(0deg); }" +
    "}" +
    "@-webkit-keyframes rotateRight {" +
        "0% { transform: rotate(-360deg); }" +
        "100% { transform: scale(0deg); }" +
    "}";
    
let imagePaths = "https://diekommune.de.cool/";
let logoImagePaths = [
    imagePaths + "0.svg", // original
    imagePaths + "1.svg", // empty eyes 
    imagePaths + "2.svg", // eyes closed mouth open
    imagePaths + "3.svg", // smirking eyes open
    imagePaths + "4.svg" // both closed
];

// Multiplies a random number with the array-length of the alert messages
let randomIndex = Math.floor(Math.random() * Math.floor(dbsAlertMessages.length)); // Generates a random number
let randomMessage = dbsAlertMessages[randomIndex]; // Choose randomly one of the thre text areas

// Fires the highest voted answer if no accepted answer avaiable
let highestVotedAnswer = getHighestVotedAnswer();

// Fires the accepted answer if avaiable
let accepetedDomElement = getAcceptedAnswer();

// Proofes whether the Objects are correctly setted
let displayAnswer = accepetedDomElement;
if (!accepetedDomElement) {
    displayAnswer = highestVotedAnswer;
}

let mainBody = document.body; // Add overlayed template before body
let span = document.createElement("span");
    span.innerHTML = "";
    span.className = "blurBody";
    mainBody.parentNode.insertBefore(span, mainBody); // Pushs the focusing Element before Overlay

let styleElement = document.createElement("style"); // Add a head style onto the overlayed body
    styleElement.type = "text/css";
    styleElement.appendChild(document.createTextNode(style));
    document.getElementsByTagName("head")[0].appendChild(styleElement);

function changeLogoType(randomIndex) {
// Changes the Logo Element inFrame after random setted seconds
    if (randomIndex == 0) {
        randomIndex++;
    } else {
        randomIndex--;
    }
    return logoImagePaths[randomIndex];
}

// Pushes the fired objects frome the functions into the mixed frontend body
let overlayHtml = getOverlayHtml(changeLogoType(randomIndex), randomMessage, displayAnswer.innerHTML);
    document.body.innerHTML += overlayHtml;

function buildRollEyes() {
    let eyeWrapper = document.createElement("span");
        eyeWrapper.id = "rollingEyes";
    return eyeWrapper;
} 

if (randomIndex == 1) {
    let eyeWrapper = buildRollEyes();
    eyeWrapper.innerHTML = 
    "<span class='ball rotateEyeLeft'>.</span>" +
    "<span class='ball rotateEyeRight'>.</span>";
    let logoLinkedWrapper = document.getElementById("logoWrapper");
    logoLinkedWrapper += eyeWrapper;
}
    // Creates the animated douche-guy logo :-)    
    function getLogoElement(logoElement) {
        logoElement = document.getElementById("dbsLogo");
        if (!logoElement) {
            return null;
        }
        return logoElement;
    }  

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