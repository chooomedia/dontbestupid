function getOverlayHtml(message, answer, question, voteBar, tags) {
    // Appends the following element into the body of stackoverflow
    let html =
    "<header id='dbsNavbar' class='top-bar show' style='border-top:unset;'>" +
        "<div class='-container'>" +
            "<div class='dbsHeadOver'>" +
                "<a href='#' class='left-sidebar-toggle p0 js-left-sidebar-toggle'>" +
                    "<a id='logoWrapper' href='#' title='comming soon - https://dont-be-stup.id'>" +
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
                        question.title +
                        "</h1>" +
                        "<div class='pl8 aside-cta grid--cell' role='navigation' aria-label='ask new question'>" +
                            "<a href='/questions/ask' class='d-inline-flex ai-center ws-nowrap s-btn s-btn__primary'>Donate</a>" +
                        "</div>" +
                    "</div>" +
                    "<div id='mainbar' class='dbsMainbar' role='main'>" + // style='box-shadow: 9px 12px 28px rgba(55,55,55,0.1);'
                        "<div class='question' id='question'>" +
                            "<div class='post-layout'>" + 
                                "<div class='votecell post-layout--left'>" +
                                    "<div class='vote'>" +
                                        voteBar +
                                    "</div>" +
                                "</div>" +
                                "<div class='postcell post-layout--right'>" +
                                    "<div class='post-text'>" +
                                        answer +
                                    "</div>" +
                                    "<div class='post-taglist grid gs4 gsy fd-column'>" +
                                        "<div class='grid ps-relative d-block'>" +
                                        tags +
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
function getAnswers() {
    let allAnswers = document.querySelectorAll(".answer");
    if (allAnswers.length == 0) {
        return null;
    }

    let extractedAnswers = Array.from(allAnswers).map(answer => {
        let firstLevelDiv = answer.getElementsByTagName("div")[0];
        let voteBarLeft = firstLevelDiv.getElementsByTagName("div")[1];
        let contentDiv = firstLevelDiv.getElementsByTagName("div")[2];
        let votes = voteBarLeft.getElementsByTagName("span")[0];
        let tagsArray = Array.from(answer.getElementsByClassName("post-tag"));
        let voteCount = parseInt(votes.innerText.trim());

        return {
            classes: answer.classList,
            innerHtml: contentDiv.children[0].innerHTML,
            voteCount: voteCount,
            voteBar: voteBarLeft.innerHTML,
            tags: tagsArray.map(tag => tag.innerText)
        };
    });
    
    return extractedAnswers;
}    

function getHighestVotedAnswer() {
    let allAnswers = getAnswers();
    let maxVotedAnswer = {};

    allAnswers.forEach(answer => {
        if (!maxVotedAnswer.voteCount || answer.voteCount > maxVotedAnswer.voteCount) {
            maxVotedAnswer = answer;
        }
    });

    return maxVotedAnswer;
}

function getAcceptedAnswer() {
    let allAnswers = getAnswers();
    let acceptedAnswers = allAnswers.filter(answer => answer.classes.contains("accepted-answer"));
    if (acceptedAnswers.length == 0){
        return null;
    }    
    return acceptedAnswers[0];
}

function getQuestion() {
    let questionElement = document.getElementById("question-header")
    let questionElementTitle = document.getElementsByClassName("question-hyperlink")[0];
    let questionElementX = {
        innerHTML: questionElement.innerHTML,
        title: questionElementTitle.innerHTML
    };
    return questionElementX;
}

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
            "<a href='#'>Muhaha ha ha!</a>" +
        "</h1>" +
        "<p class='dbsPushMessage'>" +
            "Ouw! Its better waste my time on Social Media</p>" +
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
        "z-index: 0;" +
    "}" +
    "#dbsNavbar {" +
        "position: fixed;" +
        "background-color: #333333;" +
        "box-shadow: 0px 3px 6px #888888;" +
        "transition: box-shadow cubic-bezier(.165, .84, .44, 1) .25s;" +
        "height: 51px;" +
        "box-sizing: border-box;" +
        "opacity:1;" +
        "transition: all .4s;" +
        "animation: animateNavbar .2s 1 alternate;" +
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
        "max-height: 74px;" +
        "min-height: 60px;" +
        "animation: showDrDoucheDialog .3s 1 ease-in .6s forwards;" +
        "opacity: 0;" +
        "position: relative;" +
        "display: inline-flex;" +
        "padding: 0 5px 5px 5px;" +
        "word-break: break-all;" +
        "text-overflow: clip;" +
        "left: 14px;" +
        "background: white;" +
        "border: 4px solid #333;" +
    "}" +
    "#acceptButton {" +
        "padding: 0 15px;" +
        "margin-top: 4px;" +
        "letter-spacing: -1px;" +
        "font-size: 23px;" +
        "background: #333;" +
        "border: 1px solid #999;" +
        "box-shadow: unset;" +
        "transition: all .3s;" +
    "}" +
    "#acceptButton:disabled {" +
        "color: #FFF !important;" +
        "opacity: .4;" +
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
    "#left-sidebar, #sidebar {" + 
        "height: 84vh;" +
        "transition: all .3s;" +
        "animation: blurSidebars .6s 1 ease-out forwards;" +
    "}" +
    ".dbsContainer {" +
        "top: 51px;" +
        "box-sizing: border-box;" +
        "overflow:hidden;" +
        "position: absolute;" +
        "animation: animateOverlay 1s 1 alternate;" +
    "}" +
    ".dbsContainer #content {" +
        "padding:14px 24px 0 24px;" +
    "}" +
    "#dbsOverlay {" +
        "position: relative;" +
        "top: 23px;" +
        "transition: all .3s;" +
        "padding: 0 24px;" +
    "}" +
    "#dbsOverlay .inner-content #question-header {" +
        "height: 49.5px;" +
        "background: white;" +
        "border-bottom: 1px solid #e4e6e8;" +
    "}" +
    ".dbsMainbar {" +
        "padding-top:12px !important;" +
        "position: relative;" +
        "background: linear-gradient(to bottom, rgba(255,255,255,1) 80%,rgba(255,255,255,0) 20%);" +
        "z-index: 1000;" +
        "top: -13px;" +
        "left: 1px;" +
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
        "animation: rotateLeft 2s 10 alternate 1s forwards;" +
    "}" +
    ".rotateEyeRight {" + 
        "animation: rotateRight 2s 10 alternate .6s forwards;"  +
    "}" +
    "@-webkit-keyframes blurSidebars {" +
        "0% { -webkit-filter: blur(0); }" +
        "100% { -webkit-filter: blur(7px); }" +
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
    "}" +
    "@-webkit-keyframes changeDoucheDialogContent {" +
        "0% { opacity: 0; }" +
        "100% { opacity: 1; }" +
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
let randomLogoPathIndex = Math.floor(Math.random() * Math.floor(logoImagePaths.length));
// Choose randomly one of the thre text areas

// Fires the highest voted answers if no accepted answer avaiable
let highestVotedAnswer = getHighestVotedAnswer();

// Fires the accepted answers if avaiable
let accepetedDomElement = getAcceptedAnswer();

// Proofes whether the Objects are correctly setted
let displayAnswer = accepetedDomElement;
if (!accepetedDomElement || accepetedDomElement.voteCount < highestVotedAnswer.voteCount) {
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

function getRandomMessage() {
    let RandomMessageObj = dbsAlertMessages[randomMessagesIndex];
    return RandomMessageObj;
}

// CALL ME CONSTRUCTOR :-P
// Pushes the fired objects frome the functions into the mixed frontend body
let overlayHtml = getOverlayHtml(getRandomMessage(), displayAnswer.innerHtml, getQuestion(), displayAnswer.voteBar, displayAnswer.tags);
    document.body.innerHTML += overlayHtml;

// Main Selector of the overlayerd dbs content
let dbsContainer = document.getElementsByClassName("dbsContainer")[0];
// Selects dr`s douche`s dialog
let dialogSelector = document.getElementById("drDoucheDialog");
    dialogSelector.style.minWidth = "794px";

function dialogWidth() {
    dialogSelector.style.minWidth = "40px";
    dialogSelector.style.transition = "all .2s";
    return;    
}

// Close the dialog inside navigation after 7 seconds
setTimeout(function() {
    dialogSelector.innerHTML = "";
    let closeButton = dbsCloseButton();
    dialogWidth();
    dialogSelector.appendChild(closeButton);    
}, 5000); 

// Sets the Height of the overlay parent div
function copyFromOrgPage() {
    let mainBarEl = document.getElementById("mainbar");
    let questHead = document.getElementById("question-header");
        questHead.style.display = "none";
    let dbsMainbar = document.getElementsByClassName("dbsMainbar");
        dbsMainbar[0].style.height = mainBarEl.offsetHeight + 'px';
    return dbsMainbar;
}

// Creates the logo element
copyFromOrgPage();
let logoImageOrg = 'https://diekommune.de.cool/0.svg';
let logoWrapper = document.getElementById("logoWrapper");
let logoImagePath = logoImagePaths[randomLogoPathIndex];
let logoImgElement = document.createElement("img");
    logoImgElement.id = "dbsLogo";
    logoImgElement.src = logoImagePath;
    let i = 0;
    logoImgElement.onclick = (logoImagePath) => {   
        let url = logoImagePaths[i];
        document.getElementById('dbsLogo').src = url;
        if (i == logoImagePaths.length -1) {
            i = 0;
            return;
        }
        i = i + 1;
    };
    logoWrapper.appendChild(logoImgElement);

if (randomLogoPathIndex == 1) {
    let eyeWrapper = buildRollEyes();
    logoWrapper.appendChild(eyeWrapper);
}

function buildRollEyes() {
    let eyeWrapper = document.createElement("span");
        eyeWrapper.id = "rollingEyes";
        eyeWrapper.innerHTML = 
        "<span class='ball rotateEyeLeft'>.</span>" +
        "<span class='ball rotateEyeRight'>.</span>";
    setTimeout(function(){ 
        eyeWrapper.style.display = "block";
    }, 200);
    return eyeWrapper;
}

let dbsNavbar = document.getElementById("dbsNavbar");

// Creates the close button
function dbsCloseButton() {
    let dbsButton = document.createElement("button");
    let counter = 5;
        dbsButton.id = "acceptButton";
        dbsButton.innerHTML = counter;
        dbsButton.disabled = true;
        // Close the overlayered box over the open tab
        dbsButton.onclick = (e) => {
            // Selects the navigation header
                dbsNavbar.className = dbsNavbar.className !== "top-bar show" ? "top-bar show" : "top-bar hide";
            let dbsNavStyle = dbsNavbar.style;

            if(dbsNavbar.className == "top-bar show"){
                dbsNavStyle.display = "block";
                dbsNavStyle.transform = "translateY(0)";
                window.setTimeout(function(){
                    dbsNavStyle.opacity = 1;
                },0);
              }
            if (dbsNavbar.className === "top-bar hide") {
                dbsNavStyle.transform = "translateY(-90px)";
                dbsNavStyle.opacity = 0;
                dbsContainer.style.opacity = 0;
                window.setTimeout(function(){
                    dbsNavStyle.display = "none";
                },4000); // timed to match animation-duration
            }
        };

    // Deactivates the button and counts to 0
        counter = 4;
    let interval = setInterval(o => {
        dbsButton.innerHTML = counter;
        counter--;
        if (counter == 0) {
            clearInterval(interval);
            dbsButton.innerHTML = "okay, got it!";
        }
    }, 1000);

    // Deactivates the button for 5 seconds
    setTimeout(function () {
        dbsButton.disabled = false;
    }, 100);
    return dbsButton;
}