let wallet = new DbsAccount();
let template = new DbsTemplate(wallet);
let soApi = new SoApi(document.body);
let dbsStorage = new DbsStorage();

soApi.blurSidebars();

// Gets the local storaged objects
dbsStorage.getDbsStorage(window.location.href, (pageMetadata) => {
    let propName = Object.keys(pageMetadata)[0];
    let obj = pageMetadata[propName];
    obj.acceptedAnswer = soApi.getAcceptedAnswer();
    obj.highestPointAnswer = soApi.getHighestVotedAnswer();
    obj.question = soApi.getQuestion();
    // Writes the so answers as a object inside local storage
    chrome.storage.sync.set(pageMetadata);
});


wallet.loaded = function() {
    // CALL ME CONSTRUCTOR :-P
    // Pushes the fired objects frome the functions into the mixed frontend body
    let overlayHtml = template.getOverlayHtml(
                          soApi.getDisplayAnswer(true)
                        , soApi.getQuestion()
                        );

    // Adds the overlay-content to the DOM
    document.body.innerHTML += overlayHtml;
    // Adds the animated Logo
    template.insertLogoWrapper();
    // Adds dr Douche`s Dialog
    template.drDoucheDialogMode();

    // Took values from parent-page push it into child-page(overlayelement)
    template.getValuesFromParrentPage();

    template.closeButtonClick = function() {
        soApi.unBlurSidebars();

        // Selects the navigation header
        let dbsNavbar = document.getElementById("dbsNavbar");
            dbsNavbar.className = dbsNavbar.className !== "top-bar show" ? "top-bar show" : "top-bar hide";
        let dbsNavStyle = dbsNavbar.style;
        let dbsContainer = document.getElementsByClassName('dbsContainer')[0];
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
};