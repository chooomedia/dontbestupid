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
    
    wallet.lowBalance = function() {
        
        let donateDialogCardStack = new CardStack({
            itemHeight: "332px"
        }); 

        let drDoucheDialogElement = document.getElementById("drDoucheDialog");
        drDoucheDialogElement.innerHTML = "";

        drDoucheDialogElement.appendChild(donateDialogCardStack.innerDialogElement);
        template.createIntroDonateInnerDailog();

        let card1Front = "<div class='inner'>" +
                            "<div style='text-align:center;max-width:100%;'>" +
                                "<h2 style='margin: 0 0 4px 0;font-size: 26px;line-height: 54px;background: rgba(43,43,43,.9);color: #fff;'>Preserve the Dev's freedom</h2>" + 
                                "<img src='https://diekommune.de.cool/no-jail.png' style='width:inherit;max-height:160px;' alt='Logo dontbestupid sad because in jail...' />" + 
                            "</div>" +
                            "<div style='height28px;padding:4px;margin: 0 0 4px 0;border:1px solid rgba(43,43,43,.3);'>" +
                                template.setDonateDialogMeta() + 
                            "</div>" +
                            "<div style='padding:4px;box-sizing:padding-box;border:1px solid rgba(43,43,43,.3);'>" +
                                "So that this extension can be used in the near future also for e.g. Facebook or Youporn, I have to reinholen hobby development time." +
                            "</div>" +
                        "</div>";

        let card1Back = "<div class='inner' style='display:inline-block;transform:rotateY(180deg);text-align:center;font-size:16px;line-height:22px;'>" +
                            "<div style='text-align:center;max-width:387px;'>" +
                                "<h2 style='margin: 0 0 4px 0;font-size: 26px;line-height: 54px;background: rgba(43,43,43,.9);color: #fff;'>" +
                                    "Donate some Bucks" + 
                                "</h2>" +
                                "<input required style='line-height:54px;color:#555;width:220px;border:unset;border-bottom:1px solid grey;background:transparent;'" +
                                    "id='donateDev' type ='text' placeholder='1' pattern='.*' />" +
                                "<br>" +
                                template.setDonateDialogButton() + 
                            "</div>" +
                        "</div>";
        let card1 = new Card(card1Front, card1Back);
        donateDialogCardStack.addCard(card1);
    
        let card2Front = "<div class='inner'>" +
                            "<div style='text-align:center;max-width:100%;'>" +   
                                "<h2 style='margin: 0 0 4px 0;font-size: 26px;line-height: 54px;background: rgba(43,43,43,.9);color: #fff;'>Share your opinion</h2>" + 
                                "<img src='https://diekommune.de.cool/share-new.gif' style='width:inherit%;max-height:160px;' alt='placeholderimg' />" +
                            "</div>" +
                            "<div style='height28px;padding:4px;margin: 0 0 4px 0;border:1px solid rgba(43,43,43,.3);'>" +
                                template.setDonateDialogMeta() + 
                            "</div>" +
                            "<div style='padding:4px;box-sizing:padding-box;border:1px solid rgba(43,43,43,.3);'>" +
                                "So that this extension can be used in the near future also for e.g. Facebook or Youporn, I have to reinholen hobby development time." +
                            "</div>" +
                        "</div>";

        let card2Back = "<div class='inner' style='display:inline-block;transform:rotateY(180deg);text-align:center;font-size:16px;line-height:22px;'>" +
                            "<div style='text-align:center;max-width:387px;'>" +
                                "<h2 style='margin: 0 0 4px 0;font-size: 26px;line-height: 54px;background: rgba(43,43,43,.9);color: #fff;'>" +
                                    "Share your opinion " + 
                                "</h2>" +
                                "<textarea required style='min-height:54px;max-height:162px;line-height:22px;color:#555;width:220px;border:unset;border-bottom:1px solid grey;background:transparent;' " + 
                                    "id='commentExtension' type ='text' placeholder='write something about this browser extension' pattern='.*'></textarea>" +
                                "<br>" +
                                template.setDonateDialogButton() + 
                            "</div>" +
                        "</div>";
        let card2 = new Card(card2Front, card2Back);
        donateDialogCardStack.addCard(card2);
        template.createDonateThxDialog();
    };


    // Adds dr Douche`s Dialog
    if (wallet.balance > 0) {
        template.drDoucheDialogMode();
    }

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