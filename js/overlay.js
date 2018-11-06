function getOverlayHtml(content) {
    return  "<div id='overlay'>" +
                "<div class='content'>" +
                    content +
                    "<hr>" + 
                    "<div id='acceptedAnswer' style='overflow-y:auto;text-align:left;'>" +
                        "<h1 style='font-size:1.2em;'>Accepted Answer</h1>" +
                        "<div id='acceptedAnswerInner'></div>" +
                    "</div>" +
                    "<button id='acceptButton' disabled>okay, got it</button>" +
                "</div>" +
            "</div>";
}
// Fires randomly one of these text areas
let dbsAlertMessages = [
            "<h1><span>Read focused!</span></h1>" +
            "<hr>" +
                "Don`t waste your time looking up with stuff in the internet." +
                "<br>" +
                "Instead use your brain and spend your time with more meanfull things :-)",

            "<h1><span>R T F M !</span></h1>" +
            "<hr>" +
                "Don`t be stupid fellow." +
                "<br>" +
                "Sometimes its helpfull to <b>R</b>ead <b>T</b>he <b>F</b>*king <b>M</b>anual :-)",

            "<h1><span>Muhahahaha!</span></h1>" +
            "<hr>" +
                "Ouw! Its better waste my time on Social Media" +
                "<br>",
]

let style = // Adds all stlyes from the Overlaye
    
    ".blurBody {" +
        "position: fixed;" +
        "width: 100%;" +
        "height: 100%;" +
        "background: rgba(255,255,255,0.98);" + 
        "animation: pulseBackground 3s infinite alternate;" +
        "height: 100%;" +
        "top: 0;" +
        "left: 0;" +
        "bottom: 0;" +
        "z-index: 9999;" +
    "}" +
    "hr {" + 
    "margin-bottom: 14px !important;" + 
    "}" +
    "#overlay {" +
        "width:50%;" +
        "overflow: hidden;" +
        "animation: animateOverlay .5s 1 alternate;" +
        "margin: 0 auto;" +
        "background: rgba(44,44,44,0.97);" +
        "border: 1px solid #222222;" +
        "top:1.4%;right:1%;" +
        "bottom:2.9%;left:1%;" +
        "z-index:99999;position:fixed;" +
        "padding:1em;" +
        "text-align:center;font-size:1.8em;" +
        "color:white;" +
        "box-shadow: 0 0 10vh rgba(34,34,34,0.995);" +
    "}" +
    "#acceptedAnswer {" +
        "margin-top: 1em;" +
        "max-height: 333px;" +
    "}" +
    "#acceptedAnswerInner {" +
        "background: rgba(22,22,22,1);" +
        "overflow-x: auto;" +
    "}" +
    ".content {" +
        "filter: blur(0px) !important;" +
        "position: relative;" +
        "z-index: 1;" +
        "line-height: 33px;" +
    "}" +
    "button {" +
        "opacity: 1 !important;" +
        "color:black;margin-top: 1em;" +
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
        "0% { background: rgba(255,0,85,0.75); }" +
        "100% { background: rgba(255,255,255,0.95); }" +
    "}" +
    ".content h1 {" +
        "width: 100%;" +
        "font-size: 2.4em;" +
        "font-family: Courier New !important;" +
        "margin: 0 auto !important;" +
        "text-align: center;" +
        "color:white;font-weight:800;" +
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

mainBody.parentNode.insertBefore(span, mainBody);

let styleElement = document.createElement("style"); // Add a head style onto the overlayed body
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(style));
document.getElementsByTagName("head")[0].appendChild(styleElement);

let randomIndex = Math.floor(Math.random() * Math.floor(dbsAlertMessages.length)); // Generates a random number
let randomMessage = dbsAlertMessages[randomIndex]; // Choose randomly one of the thre text areas

document.body.innerHTML += getOverlayHtml(randomMessage); // Add overlayed template before body

chrome.storage.sync.get(document.location, function (pageMetadata) {
    let accepetedDomElement = document.querySelectorAll(".accepted-answer .post-text");

    if (accepetedDomElement.length == 0) {
        return;
    }

    let eStyle = accepetedDomElement[0].style;
        eStyle.margin = "0 auto";
        eStyle.width = "100%";
        eStyle.padding = "18px";
        eStyle.border = "1px solid grey";
        eStyle.overflowY = "auto";

    let accepetedDomCodeElement = document.getElementsByTagName("code");
        for (i = 0; i < accepetedDomCodeElement.length; i++) {
            accepetedDomCodeElement[i].style.color = "black";
    }

    pageMetadata.acceptedAnswer = accepetedDomElement[0].outerHTML; // accepted answer HTML
    chrome.storage.sync.set(pageMetadata); // Store to the database with the url as key

    // Display the accepted answer from so in the overlayer
    let acceptedAnswerOverlayElement = document.getElementById("acceptedAnswerInner"); 
        acceptedAnswerOverlayElement.innerHTML = pageMetadata.acceptedAnswer;
});

let overlayElement = document.getElementById("overlay");
let acceptButtonElement = document.getElementById("acceptButton");

// Deactivates the button for 5 Seconds
setTimeout(function () {
    document.getElementById("acceptButton").disabled = false;
}, 7000);

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