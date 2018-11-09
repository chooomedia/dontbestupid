function getOverlayHtml(logo, message, answer) {
    // Appends the following element into the body of stackoverflow
    let html =
    "<header id='dbsNavbar' class='top-bar' style='border-top:unset;'>" +
        "<div class='-container'>" +
            "<div class='dbsHeadOver'>" +
                "<a href='#' class='left-sidebar-toggle p0 js-left-sidebar-toggle'>" +
                    "<a id='logoWrapper' href='#' title='comming soon - https://dont-be-stup.id'>" +
                        "<img id='dbsLogo' src='"+ logo +"' />" +
                    "</a>" +
                    "<div id='drDoucheDialog'>" +
                        "<nav id='dialogMenu'></nav>" +
                        message +
                    "</div>" +
                "</a>" +
            "</div>" +
        "</div>" +
    "</header>" +
       
    "<div class='container dbsContainer'>" +
        "<div id='left-sidebar' data-is-here-when='md lg' class='left-sidebar js-pinned-left-sidebar'>" +
            "<div class='left-sidebar--sticky-container js-sticky-leftnav'></div>" +
        "</div>" +
            "<div id='dbsOverlay'>" +
                "<div class='inner-content clearfix'>" +
                    "<div id='question-header' class='grid'>" +
                        "<h1 itemprop='name' class='grid--cell fs-headline1 fl1'>" +
                            "<div class='question-hyperlink'>" +

                            "</div>" +
                        "</h1>" +
                        "<div class='pl8 aside-cta grid--cell' role='navigation' aria-label='ask new question'>" +
                            "<a href='/questions/ask' class='d-inline-flex ai-center ws-nowrap s-btn s-btn__primary'>Ask Question</a>" +
                        "</div>" +
                    "</div>" +
                    "<div id='mainbar' role='main' style='background: white;'>" + // style='box-shadow: 9px 12px 28px rgba(55,55,55,0.1);'
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
                    "<div id='sidebar' style='position:relative;top:-10px;' class='show-votes' role='complementary'>" +
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
    let result = {
        voteCount: 0,
        innerHTML: ''
    };

    if (accepetedDomElement.length == 0) {
        return null;
    } else {
        return accepetedDomElement[0];
    }
    
}

function getQuestion() {
    let getQuestionValue = document.getElementsByClassName("question-hyperlink");
        gevoteCounttQuestionValue.innerHTML = "";
}voteCount

// Fires randomnly one of these text areas
let dbsAlertMessages = [
    "<div class='innerDialog'>" + 
        "<h1 class='dbsPushMessageTitle'>" +
            "<a href='#'>Clam, Dude - try again!</a>" +
        "</h1>" +
        "<p class='dbsPushMessage'>" +
            "Don`t waste your time looking up with stuff in the internet. Instead use your brain and spend your time with more meanfull things..." +
        "</p>" +
    "</div>",

    "<div class='innerDialog'>" + 
        "<h1 class='dbsPushMessageTitle'>" +
            "<a href='#'>R T F M !</a>" +
        "</h1>" +
        "<p class='dbsPushMessage'>" +
            "Somtimes it is very helpfull to invest more Time. More Time to understand more - so <b>R</b>ead <b>T</b>he <b>F</b>*king <b>M</b>anual :-)" +
        "</p>" +
    "</div>",

    "<div class='innerDialog'>" + 
        "<h1 class='dbsPushMessageTitle'>" +
            "<a href='#'>Whats Wrong? - are you nuts?</a>" +
        "</h1>" +
        "<p class='dbsPushMessage'>Don`t be stupid fellow." +
            "Don`t be stupid fellow. eat less Meat, more laughing bla bla - i`m not your Vather, Luke." +
        "</p>" +
    "</div>",

    "<div class='innerDialog'>" + 
        "<h1 class='dbsPushMessageTitle'>" +
            "<a href='#>Muhaha ha ha!</a>" +
        "</h1>" +
        "<p class='dbsPushMessage'>Ouw! Its better waste my time on Social Media</p>" +
    "</div>"
];

// Writes from javaScript inside the DOM element from the browser - sooo long...
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
        "font-size: 20px !important;" +
        "letter-spacing: -1px;" +
    "}" +
    "p.dbsPushMessage {" +
        "font-size: 15px;" +
        "line-height: 18px;" +
        "margin: 0 auto;" +
    "}" +
    "body .top-bar~.container {" + 
        "margin: 0 43.5px !important;" + 
    "}" +
    ".dbsBody {" +
        "position: absolute;" +
        "width: 55.8%;" +
        "height: 100vh;" +
        "background: rgba(255,255,255,0.96);" +
        "top: 0;" +
        "left: 208px;" +
        "right: 15%;" +
        "bottom: 0;" +
        "z-index: -1;" +
    "}" +
    "#dbsNavbar {" +
        "position: fixed;" +
        "background-color: #333333;" +
        "box-shadow: 0px 3px 6px #888888;" +
        "transition: box-shadow cubic-bezier(.165, .84, .44, 1) .25s;" +
        "height: 51px;" +
        "box-sizing: border-box;" +
        "transition: all .4s;" +
        "animation: animateNavbar .4s 1 alternate;" +
    "}" +
    "#dbsLogo {" +
        "width: 90px;" +
        "margin: 0 0 0 19px;" +
        "display:inline-flex;" +
        "position:relative;" +
        "float:left;" +
        "z-index:2;" +
        "border: 4px solid #333333;" +
        "animation: showLogo .3s 1 ease-in;" +
        // background: url(https://cdn.dribbble.com/users/1065420/screenshots/3933364/gary-big-eyes.gif);" +
        // "background-size: 136% 89%;" +
        // "background-position: -6px -22px;" +
    "}" +
    "#drDoucheDialog {" +
        "animation: showDrDoucheDialog .3s 1 ease 1s forwards;" +
        "opacity: 0;" +
        "transition: all .3s;" +
        "position: relative;" +
        "display: inline-flex;" +
        "padding: 0 5px 5px 5px;" +
        "word-break: break-all;" +
        "text-overflow: clip;" +
        "margin-top: 5px;" +
        "left: 14px;" +
        "background: white;" +
        "border: 4px solid #333;" +
        "width: 62.8%;" +
        "max-height: 80px;" +
        "min-height: 60px;" +
    "}" +
    "#drDoucheDialog:after, #drDoucheDialog:before {" +
        "left: -19px;" +
        "top: 67%;" +
        "border: solid transparent;" +
        "content: ' ';" +
        "height: 0;" +
        "width: 0;" +
        "position: absolute;" +
        "pointer-events: none;" +
    "}" +
    "#drDoucheDialog:after {" +
        "border-right-color: #333;" +
        "border-width: 15px;" +
        "margin-left: -11px;" +
        "margin-top: -22px;" +
        "z-index: -1;" +
    "}" +
    "#drDoucheDialog:before {" +
        "border-color: rgba(194, 225, 245, 0);" +
        "border-right-color: #FFF;" +
        "border-width: 10px;" +
       " margin-top: -16px;" +
    "}" +
    "}" +
    ".innerDialog {" +
        "line-height:30px;" +
    "}" +
    "nav#dialogMenu {" +
        "display: none;" +
    "}" +
    ".dbsHeadOver {" +
        "width: 100%;" +
        "margin-top: 39px;" +
    "}" +
    ".dbsContainer {" +
        "top: 51px;" +
        "position: absolute;" +

    "}" +
    ".dbsContainer #content {" +
        "padding:14px 24px 0 24px;" +
    "}" +
    "#dbsOverlay {" +
        "animation: animateOverlay .6s 1 alternate .3s forwards;" +
        "top: 23px;" +
        "position: relative;" +
        "padding: 0 25px;" +
    "}" +
    "#dbsOverlay .inner-content #question-header {" +
        "margin: 0 auto 26px auto;" +
        "height: 49.5px;" +
        "background: white;" +
        "border-bottom: 1px solid #e4e6e8;" +
    "}" +
    "#dbsOverlay .inner-content #mainbar {" +
        "background: white;" +
        "position: relative;" +
        "z-index: 1000;" +
        "top: -12px;" +
    "}" +
    "#left-sidebar, #sidebar {" + 
        "height: 84vh;" +
        "filter: blur(7px);" +
        "transition: all .3s;" +
        "animation: blurSidebars .6s 1 ease-out;" +
    "}" +
    "#rollingEyes {" + 
        "width: 60px;" +
        "background: #f8c8b0;" +
        "height: 20px;" +
        "display: none;" +
        "position: absolute;" +
        "left: 34px;" +
        "top: 19px;" +
        "z-index: 1;" +
    "}" +
    ".ball {" + 
        "height: 20px;" +
        "width: 20px;" +
        "margin: 0 5px;" +
        "border-radius:50%;" +
        "display: inline-flex;" +
        "line-height:2px;" +
        "color: #000 !important;" +
        "background: #FFF !important;" +
        "font-size: 38px !important;" +
    "}" +
    ".rotateEyeLeft {" + 
        "animation: rotateLeft 2s 10 ease-out;" +
    "}" +
    ".rotateEyeRight {" + 
        "animation: rotateRight 2s 10 ease-out;"  +
    "}" +
    
    "@-webkit-keyframes blurSidebars {" +
        "0% { -webkit-filter: blur(0); filter: translateZ(-100px); }" +
        "100% { -webkit-filter: blur(7px); filter: translateZ(0); }" +
    "}" +
    "@-webkit-keyframes animateOverlay {" +
        "0% { -webkit-filter: blur(5px); transform: translateY(-100%); }" +
        "100% { -webkit-filter: blur(0); transform: translateY(0); }" +
    "}" +
    "@-webkit-keyframes animateNavbar {" +
        "0% { transform: translateY(-51px); }" +
        "100% { transform: translateY(0); }" +
    "}" +
    "@-webkit-keyframes showLogo {" +
        "0% { transform: scale(0); }" +
        "100% { transform: scale(1); }" +
    "}" +
    "@-webkit-keyframes showDrDoucheDialog {" +
        "0% { transform: translateY(-100px); opacity: 0; }" +
        "100% { transform: translateY(0); opacity: 1; }" +
    "}" +
    "@-webkit-keyframes rotateLeft {" +
        "0% { transform: rotate(0deg); }" +
        "100% { transform: rotate(359deg); }" +
    "}" +
    "@-webkit-keyframes rotateRight {" +
        "0% { transform: rotate(0deg); }" +
        "100% { transform: rotate(-359deg); }" +
    "}";

// Builds the Random Facelogo Ambient    
let imgSrv = "https://diekommune.de.cool/";
let logoImagePaths = [
    imgSrv + "0.svg", // original
    imgSrv + "1.svg", // empty eyes 
    imgSrv + "2.svg", // eyes closed mouth open
    imgSrv + "3.svg", // smirking eyes open
    imgSrv + "4.svg" // both closed
];

// Multiplies a random number with the array-length of the alert messages and logo type
let randomMessagesIndex = Math.floor(Math.random() * Math.floor(dbsAlertMessages.length));
let randomLogoTypeIndex = Math.floor(Math.random() * Math.floor(logoImagePaths.length));
// Choose randomly one of the thre text areas
let randomMessage = dbsAlertMessages[randomMessagesIndex]; 

// Fires the highest voted answers if no accepted answer avaiable
let highestVotedAnswer = getHighestVotedAnswer();

// Fires the accepted answers if avaiable
let accepetedDomElement = getAcceptedAnswer();

// Proofes whether the Objects are correctly setted
let displayAnswer = accepetedDomElement;
if (!accepetedDomElement) {
    displayAnswer = highestVotedAnswer;
}

let mainBody = document.body; // Add overlayed template before body
let span = document.createElement("span");
    span.innerHTML = "";
    span.className = "dbsBody";
    mainBody.parentNode.insertBefore(span, mainBody); // Pushs the focusing Element before Overlay

let styleElement = document.createElement("style"); // Add a head style onto the overlayed body
    styleElement.type = "text/css";
    styleElement.appendChild(document.createTextNode(style));
    document.getElementsByTagName("head")[0].appendChild(styleElement);

// Pushes the fired objects frome the functions into the mixed frontend body
let overlayHtml = getOverlayHtml(logoImagePaths[randomLogoTypeIndex], randomMessage, displayAnswer.innerHTML);
    document.body.innerHTML += overlayHtml;

if (randomLogoTypeIndex == 1) {
    let logoLinkedWrapper = document.getElementById("logoWrapper");
    let eyeWrapper = buildRollEyes();
    logoLinkedWrapper.appendChild(eyeWrapper);
}

function buildRollEyes() {
    let eyeWrapper = document.createElement("span");
        eyeWrapper.id = "rollingEyes";
        eyeWrapper.innerHTML = 
        "<span class='ball rotateEyeLeft'>.</span>" +
        "<span class='ball rotateEyeRight'>.</span>";
    setTimeout(function(){ 
        eyeWrapper.style.display = 'block';
    }, 200);
    return eyeWrapper;
} 

// Delete original question-header
// Deactive-Button dbsButton document.getElementById("acceptButton").disabled
function dbsCloseButton() {
    // Deactivates the button and counts to 0
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
        dbsOverlay.remove();
    };
}