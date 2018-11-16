let template = new DbsTemplate();
let dbsStorage = new DbsStorage();

// Gets the local storaged objects
dbsStorage.getDbsStorage(window.location.href, (pageMetadata) => {
    let propName = Object.keys(pageMetadata)[0];
    let pageMetadataValue = pageMetadata[propName];
    
    let displayAnswer = pageMetadataValue.acceptedAnswer;
    if (!displayAnswer) {
        displayAnswer = pageMetadataValue.highestPointAnswer;
    }    

    let overlayHtml = template.getOverlayHtml(
        displayAnswer, 
        pageMetadataValue.question
    );

    //  let scrambleOverlayElement = document.createElement("div");
    /*  scrambleOverlayElement.innerHTML = html;
        this._contentCrypt.scrambleInnerNodes(scrambleOverlayElement);*/
    //  return scrambleOverlayElement;
    // _crpytClass new DbsContentcrpy...

    // let postTextOrgElement = document.getElementsByClassName("post-text")[0];
    // mainBody.parentNode.insertBefore(span, mainBody); // Pushs the focusing Element before Overlay

    

    // Adds the overlay-content to the DOM
    document.body.innerHTML += overlayHtml;

    // Adds the animated Logo
    template.insertLogoWrapper();
    // Adds dr Douche`s Dialog
    template.drDoucheDialogMode();

    // Took values from parent-page push it into child-page(overlayelement)
    template.getValuesFromParrentPage();

    template.closeButtonClick = function() {
        // Selects the navigation header
        let dbsNavbar = document.getElementById("dbsNavbar");
            dbsNavbar.className = dbsNavbar.className !== "top-bar show" ? "top-bar show" : "top-bar hide";
        let dbsNavStyle = dbsNavbar.style;
        let dbsContainer = document.getElementById('dbsContainer');
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
});