setTimeout(function(){ 
    acceptButtonElement.prop('disabled', false);
}, 5000);

setTimeout();

function getOverlayHtml(content) {
    return "<div id='overlay'>" +
                "<div class='content'>" +
                    content +
                    "<br>" +
                    "<button id='acceptButton' disabled>okay, thanks</button>" +
                "</div>" +
            "</div>";
}

let dbsAlertMessages = [
    "<h1 style='font-size:2em;color:white';font-weight:800;'>Dont waste your Time!</h1>" +
    "Don`t waste your Time looking up with Stuff in the Internet." +
    "<br>" +
    "Instead use your Brain and spend your with more meanfull things :-)"
    ,
    
    "<h1 style='font-size:2em;color:white';font-weight:800;'>RTFM!</h1>" +
    "Don`t be stupid Fellow." +
    "<br>" +
    "Sometimes its helpfull to <b>R</b>ead <b>T</b>he <b>F</b>*king <b>M</b>anual :-)"
    ,
    
    "<h1 style='font-size:2em;color:white';font-weight:800;'>HAHAHAHA!</h1>" +
    "Ouw! Its better spend my Time on Social Media" +
    "<br>"
]


let style = 
    "#overlay {" +
        "width:97.5%;height:83.1%;" +
        "background:rgba(0,0,0,0.93);" +
        "display:block;" +
        "top:1.4%;right:1%;" +
        "bottom:2.9%;left:1%;" +
        "z-index:99999;position:fixed;" +
        "padding:7vh 1em;" +
        "text-align:center;font-size:2.2em;" +
        "color:white;" +
        "box-shadow: 0 0 10vh rgba(0,0,0,0.99);" +
    "}" +
    ".content {" + 
        "top: 13%;position: relative;" +
    "}" +
    "#acceptButton {" +
        "color:black;margin-top: 1em;" +
        "font-size:26px;padding: 10px;" +
    "}";

let styleElement = document.createElement("style");
styleElement.type = "text/css";
styleElement.appendChild(document.createTextNode(style));
document.getElementsByTagName("head")[0].appendChild(styleElement);

let randomIndex = Math.floor(Math.random() * Math.floor(dbsAlertMessages.length));
let randomMessage = dbsAlertMessages[randomIndex];

document.body.innerHTML += getOverlayHtml(randomMessage);


let acceptButtonElement = document.getElementById("acceptButton");
let overlayElement = document.getElementById("overlay");



acceptButtonElement.onclick = (e) => {
    overlayElement.remove();
};