function getOverlayHtml(content) {
    return  "<div id='overlay'>" +
                "<div class='content'>" +
                    content +
                    "<hr>" + 
                    "<div id='acceptedAnswer' style='overflow-y:auto;text-align:left;'>" +
                        "<h1>Accepted Answer</h1>" +
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

            "<h1><span>HAHAHAHA!</span></h1>" +
            "<hr>" +
                "Ouw! Its better spend my time on Social Media" +
                "<br>",
]

let style =
    "#overlay {" +
        "width:50%;" +
        "overflow: hidden;" +
        "animation: animateOverlay .4s;" +
        "animation-timing-function: ease-out;" +
        "animation-iteration-count: 1;" +
        "margin: 0 auto;" +
        "background: rgba(44,44,44,0.97);" +
        "display:block;" +
        "border: 1px solid #222222;" +
        "top:1.4%;right:1%;" +
        "bottom:2.9%;left:1%;" +
        "z-index:99999;position:fixed;" +
        "padding:1em;" +
        "text-align:center;font-size:1.8em;" +
        "color:white;" +
        "box-shadow: 0 0 10vh rgba(34,34,34,0.995);" +
    "}" +
    "#overlay:after {" +
        "content: ' ';" +
        "width: 100%;" +
        "height: 100%;" +
        "position: absolute;" +
        "z-indec: 99;" +
        "filter blur(10px);" +
        "top: 0;" +
        "left:0;" +
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
        "line-height: 33px;" +
    "}" +
    "button {" +
        "opacity: 1 !important;" +
        "color:black;margin-top: 1em;" +
        "font-size:26px;padding: 10px;" +
        "transition: all .6s !important;" +
    "}" +
    "button:disabled {" +
        "opacity: .1 !important;" +
    "}" +
    "@-webkit-keyframes animateOverlay {" +
        "0% { -webkit-filter: blur(5em); transform: translateY(-100%); }" +
        "50% { -webkit-filter: blur(2.5em); transform: translateY(-50%); }" +
        "100% { -webkit-filter: blur(0px); transform: translateY(0); }" +
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

// Add a head style onto the overlayed body
let styleElement = document.createElement("style");
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(style));
document.getElementsByTagName("head")[0].appendChild(styleElement);

// Generates a random number
let randomIndex = Math.floor(Math.random() * Math.floor(dbsAlertMessages.length));
// Choose randomly one of the thre text areas
let randomMessage = dbsAlertMessages[randomIndex];

// Add Overlayed Template before Body
document.body.innerHTML += getOverlayHtml(randomMessage);

chrome.storage.sync.get(document.location, function (pageMetadata) {
    let accepetedDomElement = document.querySelectorAll(".accepted-answer .post-text");

    /*
    let mostDomElementNumber = document.getElementsByClassName("vote-count-post").innerHTML();
    let mostDomElement = document.querySelectorAll(".answer .post-text");
    */

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
    chrome.storage.sync.set(pageMetadata); // store to the database with the url as key

    // Display the accepted answer from so in the overlay
    let acceptedAnswerOverlayElement = document.getElementById("acceptedAnswerInner");
        acceptedAnswerOverlayElement.innerHTML = pageMetadata.acceptedAnswer;
});

let acceptButtonElement = document.getElementById("acceptButton");
let overlayElement = document.getElementById("overlay");

// Deactivates the button for 5 Seconds
setTimeout(function () {
    document.getElementById("acceptButton").disabled = false;
}, 5000);

// Close the overlay box over the open tab
acceptButtonElement.onclick = (e) => {
    overlayElement.remove();
};