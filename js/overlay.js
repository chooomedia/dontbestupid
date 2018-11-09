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
            "<div class='-main'>" +
                "<ol class='-secondary js-secondary-topbar-links drop-icons-responsively the-js-is-handling-responsiveness'>" +
                    "<li class='-item'>" +
                        "<a onclick='showWallet()' class='dbsLink'>" +
                            "<svg aria-hidden='true' class='svg-icon iconStupidollar' width='18' height='18' viewBox='0 0 18 18'>" +
                                "<path style='opacity:1;fill:#FFFFFF;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:259.50698853;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' d='M 31.1875 0 C 13.904525 0.43835438 3.7379722e-013 14.612004 0 32 C 2.3684758e-015 49.663996 14.336004 64 32 64 C 49.663996 64 64 49.663996 64 32 C 64 14.336004 49.663996 1.3812956e-013 32 0 C 31.724 3.7007434e-017 31.461833 -0.0069580061 31.1875 0 z M 31.15625 5.5 C 31.439783 5.4910103 31.714297 5.5 32 5.5 C 46.628003 5.4999998 58.5 17.371998 58.5 32 C 58.499998 46.628001 46.628002 58.5 32 58.5 C 17.371999 58.499999 5.5 46.628002 5.5 32 C 5.4999999 17.657701 16.922915 5.9512829 31.15625 5.5 z '/>" +
                                "<path style='font-size:53.81440353px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:start;line-height:100%;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#FFFFFF;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:Arial Narrow' d='M 25.645354,38.743144 C 27.706139,41.625309 33.995692,41.833441 36.155115,40.6114 C 36.947727,40.162852 37.145708,38.864507 37.145725,37.98432 C 37.145708,37.380283 36.986739,36.905677 36.668816,36.560499 C 36.333199,36.215341 35.479466,35.339232 34.490338,35.080346 C 29.473962,33.785975 25.998702,32.169274 24.638637,30.995688 C 22.942961,29.528736 22.669211,28.570622 22.669213,26.016357 C 22.669211,23.462132 23.403703,21.32133 25.064052,19.785304 C 26.724393,18.24933 29.135426,17.481331 32.297159,17.481304 C 35.317562,17.481331 39.565451,18.278588 41.636566,20.737131 L 38.183516,24.493331 C 36.236051,22.858359 34.787665,22.710631 32.403139,22.710609 C 30.901751,22.710631 30.120168,22.926362 29.484299,23.3578 C 28.848414,23.772024 28.530476,24.315664 28.530483,24.988721 C 28.530476,25.592786 28.821918,26.09328 29.404815,26.490205 C 29.987693,26.904426 31.511133,27.525729 34.549225,28.354116 C 37.958218,29.286087 40.272103,30.416513 41.490888,31.745396 C 42.691968,33.074309 43.292518,34.843296 43.292541,37.052364 C 43.292518,39.710168 42.356366,41.901988 40.484082,43.627827 C 38.629421,45.353671 36.346462,46.694998 33.061111,46.694997 C 28.832157,46.694996 23.187374,45.201054 21.630014,42.439699' sodipodi:nodetypes='cssscssssccscscscscsc'/>" +
                                "<path style='opacity:1;fill:#FFFFFF;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:259.50698853;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' d='M 30.375,12.875 L 30.375,19.71875 L 33.625,19.71875 L 33.625,12.875 L 30.375,12.875 z M 30.375,44.96875 L 30.375,51.125 L 33.625,51.125 L 33.625,44.96875 L 30.375,44.96875 z '/>" +
                            "</svg>" +
                            "<div class='dbsLinkTitle'>" +
                                " 500" +
                            "</div>" +
                        "</a>" +
                    "</li>" +
                    "<li class='-item'>" +
                        "<a onclick='showStorage()' class='dbsLink js-inbox-button'>" +
                            "<svg style='color: #FFF !important;' aria-hidden='true' class='svg-icon iconInbox' width='20' height='18' viewBox='0 0 20 18'>" +
                                "<path d='M15.19 1H4.63c-.85 0-1.6.54-1.85 1.35L0 10.79V15c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-4.21l-2.87-8.44A2 2 0 0 0 15.19 1zm-.28 10l-2 2h-6l-2-2H1.96L4.4 3.68A1 1 0 0 1 5.35 3h9.12a1 1 0 0 1 .95.68L17.86 11h-2.95z'></path>" +
                            "</svg>" +
                            "<span class='indicator-badge js-unread-count _important' style='display: none;'></span>" +
                        "</a>" +
                    "</li>" +
                    "<li class='-item help-button-item' data-remove-order='1'>" +
                        "<a onclick='showHelp()' class='dbsLink js-help-button'>" +
                            "<svg style='color: #FFF !important;' aria-hidden='true' class='svg-icon iconHelp' width='18' height='18' viewBox='0 0 18 18'>" +
                                "<path d='M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23zM11.77 8a5.8 5.8 0 0 1-1.02.91l-.53.37c-.26.2-.42.43-.5.69a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.03-.66.12-1.21.4-1.66a5.29 5.29 0 0 1 1.43-1.22c.16-.12.28-.25.38-.39a1.34 1.34 0 0 0 .02-1.71c-.24-.31-.51-.46-1.03-.46-.51 0-.8.26-1.02.6-.21.33-.18.73-.18 1.1H5.75c0-1.38.35-2.25 1.1-2.76.52-.35 1.17-.5 1.93-.5 1 0 1.79.18 2.49.71.64.5.98 1.18.98 2.12 0 .57-.2 1.05-.48 1.44z'></path>" +
                            "</svg>" +
                        "</a>" +
                    "</li>" +
                "</ol>" +
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
    ".iconStupidollar {" +
        "width:20px;" +
        "height:28px;" +
        "overflow: visible;" +
        "transform: scale(0.25) !important;" +
        "margin: -11px 7px 0 -6px;" +
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
    "a.dbsLink {" +
        "color: rgba(255,255,255,1) !important;" +
        "background-color: #333 !important;" +
        "transition: all .3s;" +
        "display: inline-flex;" +
        "align-items: center;" +
        "padding: 0 10px;" +
        "text-decoration: none;" +
        "white-space: nowrap;" +
        "position: relative;" +
    "}" +
    "a.dbsLink:hover {" +
        "background-color: rgba(255,255,255,0.15) !important;" +
    "}" +
    ".dbsLinkTitle {" +
        "margin: 2px 0 0 3px;" +
        "font-size: 16px;" +
        "line-height: 50px;" +
    "}" +
    "#acceptButton {" +
        "min-width: 57px !important;" +
        "background: #333;" +
        "border: 1px solid #999;" +
        "padding: 0 15px;" +
        "margin-top: 4px;" +
        "transition: all .3s;" +
        "letter-spacing: -1px;" +
        "font-size: 23px;" +
        "box-shadow: unset;" +
    "}" +
    "#acceptButton:hover, #acceptButton:focus {" +
        "background: rgba(255,255,255,1);" +
        "color: rgba(0,0,0,1);" +
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
        "animation: blurSidebars .7s 1 ease-out forwards;" +
    "}" +
    ".dbsContainer {" +
        "top: 51px;" +
        "box-sizing: border-box;" +
        "overflow:hidden;" +
        "position: absolute;" +
        "animation: animateOverlay .7s 1 linear;" +
    "}" +
    ".dbsContainer #content {" +
        "padding:14px 24px 0 24px;" +
    "}" +
    "#dbsOverlay {" +
        "position: relative;" +
        "top: 14px;" +
        "border-top: 9px solid white;" +
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
        "transform: rotate(-11deg);" +
        "animation: rotateLeft 3s 13 alternate;" +
    "}" +
    ".rotateEyeRight {" + 
        "transform: rotate(172deg);"  +
        "animation: rotateRight 3s 13 linear;"  +
    "}" +
    "@-webkit-keyframes blurSidebars {" +
        "0% { -webkit-filter: blur(0); }" +
        "100% { -webkit-filter: blur(7px); }" +
    "}" +
    "@-webkit-keyframes animateOverlay {" +
        "to { -webkit-filter: blur(0)); opacity: 1; transform: translateY(0); }" +
        "from { -webkit-filter: blur(5px); opacity: 0; transform: translateY(100%); }" +
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

let closeButton = dbsCloseButton();

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

let questHead = document.getElementById("question-header");

// Sets the Height of the overlay parent div
function getValuesFromParrentPage() {
    let mainBarEl = document.getElementById("mainbar");
        questHead.style.display = "none";
    let dbsMainbar = document.getElementsByClassName("dbsMainbar");
        dbsMainbar[0].style.height = mainBarEl.offsetHeight + 'px';
    return dbsMainbar;
}
// Took values from parent-page push it into child-page(overlayelement)
getValuesFromParrentPage();

// Close the dialog inside navigation after X seconds
setTimeout(function() {
    dialogSelector.innerHTML = "";
    dialogWidth();
    closeButton = dbsCloseButton();
    dialogSelector.appendChild(closeButton);    
}, 5000); 

// Creates the logo element
let logoImageOrg = 'https://diekommune.de.cool/0.svg';
let logoWrapper = document.getElementById("logoWrapper");
let logoImagePath = logoImagePaths[randomLogoPathIndex];
let logoImgElement = document.createElement("img");
    logoImgElement.id = "dbsLogo";
    logoImgElement.src = logoImagePath;
    let i = 0;
    logoImgElement.onclick = (logoImagePath) => {
        if (i == 1) {
            let eyeWrapper = buildRollEyes();
            logoWrapper.appendChild(eyeWrapper);
        }   
        let url = logoImagePaths[i];
        document.getElementById('dbsLogo').src = url;
        if (i == logoImagePaths.length -1) {
            i = 0;
            return;
        }
        i = i + 1;
    };
    
// Appends the Logo Element
    logoWrapper.appendChild(logoImgElement);
// Append the rolling eye container into child-page Logo when logo.src is the second
if (randomLogoPathIndex == 1) {
    let eyeWrapper = buildRollEyes();
    logoWrapper.appendChild(eyeWrapper);
}

// Creates and append into the logoWrapper the rolling eye container
function buildRollEyes() {
    let eyeWrapper = document.createElement("span");
        eyeWrapper.id = "rollingEyes";
        eyeWrapper.innerHTML = 
        "<span class='ball rotateEyeLeft'>.</span>" +
        "<span class='ball rotateEyeRight'>.</span>";
    setTimeout(function(){ 
        eyeWrapper.style.display = "block";
    }, 3);
    return eyeWrapper;
}

// Selector on the navbar from child-page
let dbsNavbar = document.getElementById("dbsNavbar");

// Creates the close button
function dbsCloseButton() {
    let dbsButton = document.createElement("button");
    let counter = 5;

        dbsButton.id = "acceptButton";
        dbsButton.disabled = true;
// Deactivates the button and counts to 0
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
        }, 5000);
// Close the overlayered box over the open tab
        dbsButton.onclick = (e) => {
    // Selects the navigation header
                dbsNavbar.className = dbsNavbar.className !== "top-bar show" ? "top-bar show" : "top-bar hide";
            let dbsNavStyle = dbsNavbar.style;
                questHead.style.display = "flex";
                dbsContainer.style.transform = "translateY(7.77%)";
                dbsContainer.style.display = "none";

            if(dbsNavbar.className == "top-bar show"){
                dbsNavStyle.display = "block";
                dbsNavStyle.transform = "translateY(0)";
                window.setTimeout(function(){
                    dbsNavStyle.opacity = 1;
                    dbsContainer.style.opacity = 1;
                },0);
              }
            if (dbsNavbar.className === "top-bar hide") {
                dbsNavStyle.transform = "translateY(-90px)";
                dbsNavStyle.opacity = 0;
                dbsContainer.style.opacity = 0;
                window.setTimeout(function(){
                    dbsNavStyle.display = "none";
                },5000); // timed to match animation-duration
            }
        };
    return dbsButton;
}