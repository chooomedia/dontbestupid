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

wallet.lowBalance = function() {
    let donateOverlayHtml = template.getDonateOverlayHtml();
        document.getElementById("drDoucheDialog").outerHTML = donateOverlayHtml;
// Select the donate inner Dialog an write some style values
    let innerDonateDialogDiv = document.getElementById("innerDonateDialog");
        innerDonateDialogDiv.style.minWidth = "763px";
        innerDonateDialogDiv.style.display = "grid"; 
        innerDonateDialogDiv.style.gridTemplateColumns = "1fr 57px 1fr";
        innerDonateDialogDiv.style.gridColumnGap = "4px";
        
    let showWalletAmount = document.createElement("div");
        showWalletAmount.id = document.createElement("showWalletAmount");
        showWalletAmount.innerHTML = "<p>+ 500</p>";
        showWalletAmount.style.lineHeight = "431px";
        showWalletAmount.style.color = "#FFF";
        showWalletAmount.style.fontSize = "32px";
        showWalletAmount.style.textAlign = "center";

// Selects the inner class-elements of the inner Dialog and iterate through the array and do some stuff for every element
    let innerDonateDialogs = document.getElementsByClassName("gridDialogElement");
        for (let i = 0; i < innerDonateDialogs.length; i++) { 
            if (i == 1) {
                continue;
            } else {
                innerDonateDialogs[i].style.wordBreak = "keep-all";
                innerDonateDialogs[i].style.overflow = "hidden";
                innerDonateDialogs[i].style.textAlign = "center";
                innerDonateDialogs[i].onmouseover = "toggle(el);";
                innerDonateDialogs[i].onmouseout = "toggle(el);";
            }
        }

        function toggle(el) {
            let item = document.getElementById(el);
            if(item.style.visibility == 'visible') { item.style.visibility = 'hidden'; }
            else { item.style.visibility = 'visible'; }
        }

        innerDonateDialogDiv.style.lineHeight = "423px";

    let innerThxDialog = document.createElement("div");
        innerThxDialog.id = "innerThxDialog";
        innerThxDialog.innerHTML = "Thank you very much for your support!";
        innerThxDialog.style.marginTop = "5px";
        innerThxDialog.style.background = "#333";
        innerThxDialog.style.color = "#FFF";
        innerThxDialog.style.textAlign = "center";
        innerThxDialog.style.fontSize = "22px";
        innerThxDialog.style.padding = "12px";

    let innerDialog = document.getElementsByClassName("innerDialog")[0];

        innerDialog.append(innerThxDialog);
};

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