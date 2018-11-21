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
        
        /*
        "<h1 class='dbsPushMessageTitle' style='text-align:center;font-size:26px;padding:12px 0;'>" +
        "<span>Your wallet is empty you have the following options:</span>" +
        "</h1>" +
        */
    
        let donateDialogCardStack = new CardStack({
            itemHeight: "460px"
        });    

        let drDoucheDialogElement = document.getElementById("drDoucheDialog");
        drDoucheDialogElement.innerHTML = "";
        drDoucheDialogElement.appendChild(donateDialogCardStack.innerDialogElement);
    
        let card1Front = "<div class='inner'>" +
                            "<img src='https://diekommune.de.cool/no-jail.png' style='width:100%;' alt='Logo dontbestupid sad because in jail...' />" + 
                            "<h2 style='margin: 6px 0;font-size:22px;'>Preserve the Developer`s<br> freedom by donating</h2>" + 
                            "<span>The developer of this extension likes to spend a lot of time with the fine tuning. " +
                                "But he doesn't handle money that well.  The state demands 1500 Euro from him otherwise" + 
                                "this extension will not be able to be further developed soon..." + 
                            "</span>" +
                        "</div>";
        let card1Back = "<div class='inner' style='transform:rotateY(180deg);text-align:center;font-size:42px;line-height:446px;background:#333;color:#FFF;'>" +
                            "+500" +
                            "<svg style='position:relative;top:10px;margin-left:8px;' aria-hidden='true' width='48' height='48'>" +
                                "<path style='transform:scale(0.7);opacity:1;fill:#FFFFFF;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:259.50698853;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' d='M 31.1875 0 C 13.904525 0.43835438 3.7379722e-013 14.612004 0 32 C 2.3684758e-015 49.663996 14.336004 64 32 64 C 49.663996 64 64 49.663996 64 32 C 64 14.336004 49.663996 1.3812956e-013 32 0 C 31.724 3.7007434e-017 31.461833 -0.0069580061 31.1875 0 z M 31.15625 5.5 C 31.439783 5.4910103 31.714297 5.5 32 5.5 C 46.628003 5.4999998 58.5 17.371998 58.5 32 C 58.499998 46.628001 46.628002 58.5 32 58.5 C 17.371999 58.499999 5.5 46.628002 5.5 32 C 5.4999999 17.657701 16.922915 5.9512829 31.15625 5.5 z '/>" +
                                "<path style='transform:scale(0.7);font-size:53.81440353px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:start;line-height:100%;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#FFFFFF;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:Arial Narrow' d='M 25.645354,38.743144 C 27.706139,41.625309 33.995692,41.833441 36.155115,40.6114 C 36.947727,40.162852 37.145708,38.864507 37.145725,37.98432 C 37.145708,37.380283 36.986739,36.905677 36.668816,36.560499 C 36.333199,36.215341 35.479466,35.339232 34.490338,35.080346 C 29.473962,33.785975 25.998702,32.169274 24.638637,30.995688 C 22.942961,29.528736 22.669211,28.570622 22.669213,26.016357 C 22.669211,23.462132 23.403703,21.32133 25.064052,19.785304 C 26.724393,18.24933 29.135426,17.481331 32.297159,17.481304 C 35.317562,17.481331 39.565451,18.278588 41.636566,20.737131 L 38.183516,24.493331 C 36.236051,22.858359 34.787665,22.710631 32.403139,22.710609 C 30.901751,22.710631 30.120168,22.926362 29.484299,23.3578 C 28.848414,23.772024 28.530476,24.315664 28.530483,24.988721 C 28.530476,25.592786 28.821918,26.09328 29.404815,26.490205 C 29.987693,26.904426 31.511133,27.525729 34.549225,28.354116 C 37.958218,29.286087 40.272103,30.416513 41.490888,31.745396 C 42.691968,33.074309 43.292518,34.843296 43.292541,37.052364 C 43.292518,39.710168 42.356366,41.901988 40.484082,43.627827 C 38.629421,45.353671 36.346462,46.694998 33.061111,46.694997 C 28.832157,46.694996 23.187374,45.201054 21.630014,42.439699' sodipodi:nodetypes='cssscssssccscscscscsc'/>" +
                                "<path style='transform:scale(0.7);opacity:1;fill:#FFFFFF;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:259.50698853;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' d='M 30.375,12.875 L 30.375,19.71875 L 33.625,19.71875 L 33.625,12.875 L 30.375,12.875 z M 30.375,44.96875 L 30.375,51.125 L 33.625,51.125 L 33.625,44.96875 L 30.375,44.96875 z '/>" +
                            "</svg>" +
                        "</div>";
        let card1 = new Card(card1Front, card1Back);
        donateDialogCardStack.addCard(card1);
    
        let card2Front = "<div class='inner'>" +    
                            "<img src='https://diekommune.de.cool/share-new.gif' style='width:100%;' alt='placeholderimg' />" +
                            "<h2 style='margin: 6px 0;font-size:22px;'>Share your opinion<br> about this extension</h2>" + 
                            "<span>The developer of this extension likes to spend a lot of time with the fine tuning. " +
                                "But he doesn't handle money that well.  The state demands 1500 Euro from him otherwise" + 
                                "this extension will not be able to be further developed soon..." +
                            "</span>" + 
                        "</div>";
        let card2Back = "<div class='inner' style='transform:rotateY(180deg);text-align:center;font-size:42px;line-height:446px;background:#333;color:#FFF;'>" +
                            "+100" +
                            "<svg style='position:relative;top:10px;margin-left:8px;' aria-hidden='true' width='48' height='48'>" +
                                "<path style='transform:scale(0.7);opacity:1;fill:#FFFFFF;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:259.50698853;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' d='M 31.1875 0 C 13.904525 0.43835438 3.7379722e-013 14.612004 0 32 C 2.3684758e-015 49.663996 14.336004 64 32 64 C 49.663996 64 64 49.663996 64 32 C 64 14.336004 49.663996 1.3812956e-013 32 0 C 31.724 3.7007434e-017 31.461833 -0.0069580061 31.1875 0 z M 31.15625 5.5 C 31.439783 5.4910103 31.714297 5.5 32 5.5 C 46.628003 5.4999998 58.5 17.371998 58.5 32 C 58.499998 46.628001 46.628002 58.5 32 58.5 C 17.371999 58.499999 5.5 46.628002 5.5 32 C 5.4999999 17.657701 16.922915 5.9512829 31.15625 5.5 z '/>" +
                                "<path style='transform:scale(0.7);font-size:53.81440353px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:start;line-height:100%;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#FFFFFF;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:Arial Narrow' d='M 25.645354,38.743144 C 27.706139,41.625309 33.995692,41.833441 36.155115,40.6114 C 36.947727,40.162852 37.145708,38.864507 37.145725,37.98432 C 37.145708,37.380283 36.986739,36.905677 36.668816,36.560499 C 36.333199,36.215341 35.479466,35.339232 34.490338,35.080346 C 29.473962,33.785975 25.998702,32.169274 24.638637,30.995688 C 22.942961,29.528736 22.669211,28.570622 22.669213,26.016357 C 22.669211,23.462132 23.403703,21.32133 25.064052,19.785304 C 26.724393,18.24933 29.135426,17.481331 32.297159,17.481304 C 35.317562,17.481331 39.565451,18.278588 41.636566,20.737131 L 38.183516,24.493331 C 36.236051,22.858359 34.787665,22.710631 32.403139,22.710609 C 30.901751,22.710631 30.120168,22.926362 29.484299,23.3578 C 28.848414,23.772024 28.530476,24.315664 28.530483,24.988721 C 28.530476,25.592786 28.821918,26.09328 29.404815,26.490205 C 29.987693,26.904426 31.511133,27.525729 34.549225,28.354116 C 37.958218,29.286087 40.272103,30.416513 41.490888,31.745396 C 42.691968,33.074309 43.292518,34.843296 43.292541,37.052364 C 43.292518,39.710168 42.356366,41.901988 40.484082,43.627827 C 38.629421,45.353671 36.346462,46.694998 33.061111,46.694997 C 28.832157,46.694996 23.187374,45.201054 21.630014,42.439699' sodipodi:nodetypes='cssscssssccscscscscsc'/>" +
                                "<path style='transform:scale(0.7);opacity:1;fill:#FFFFFF;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:259.50698853;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' d='M 30.375,12.875 L 30.375,19.71875 L 33.625,19.71875 L 33.625,12.875 L 30.375,12.875 z M 30.375,44.96875 L 30.375,51.125 L 33.625,51.125 L 33.625,44.96875 L 30.375,44.96875 z '/>" +
                            "</svg>" +
                        "</div>";
        let card2 = new Card(card2Front, card2Back);
        donateDialogCardStack.addCard(card2);
        
        card3Front = "<div class='inner'>" +    
                            "<img src='https://diekommune.de.cool/1.svg' style='width:100%;' alt='placeholderimg' />" +
                            "<h2 style='margin: 6px 0;font-size:22px;'>Share your opinion<br> about this extension</h2>" + 
                            "<span>The developer of this extension likes to spend a lot of time with the fine tuning. " +
                                "But he doesn't handle money that well.  The state demands 1500 Euro from him otherwise" + 
                                "this extension will not be able to be further developed soon..." +
                            "</span>" + 
                        "</div>";
        let card3Back = "<div class='inner' style='transform:rotateY(180deg);text-align:center;font-size:42px;line-height:446px;background:#333;color:#FFF;'>" +
                            "+300" +
                            "<svg style='position:relative;top:10px;margin-left:8px;' aria-hidden='true' width='48' height='48'>" +
                                "<path style='transform:scale(0.7);opacity:1;fill:#FFFFFF;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:259.50698853;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' d='M 31.1875 0 C 13.904525 0.43835438 3.7379722e-013 14.612004 0 32 C 2.3684758e-015 49.663996 14.336004 64 32 64 C 49.663996 64 64 49.663996 64 32 C 64 14.336004 49.663996 1.3812956e-013 32 0 C 31.724 3.7007434e-017 31.461833 -0.0069580061 31.1875 0 z M 31.15625 5.5 C 31.439783 5.4910103 31.714297 5.5 32 5.5 C 46.628003 5.4999998 58.5 17.371998 58.5 32 C 58.499998 46.628001 46.628002 58.5 32 58.5 C 17.371999 58.499999 5.5 46.628002 5.5 32 C 5.4999999 17.657701 16.922915 5.9512829 31.15625 5.5 z '/>" +
                                "<path style='transform:scale(0.7);font-size:53.81440353px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:start;line-height:100%;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#FFFFFF;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:Arial Narrow' d='M 25.645354,38.743144 C 27.706139,41.625309 33.995692,41.833441 36.155115,40.6114 C 36.947727,40.162852 37.145708,38.864507 37.145725,37.98432 C 37.145708,37.380283 36.986739,36.905677 36.668816,36.560499 C 36.333199,36.215341 35.479466,35.339232 34.490338,35.080346 C 29.473962,33.785975 25.998702,32.169274 24.638637,30.995688 C 22.942961,29.528736 22.669211,28.570622 22.669213,26.016357 C 22.669211,23.462132 23.403703,21.32133 25.064052,19.785304 C 26.724393,18.24933 29.135426,17.481331 32.297159,17.481304 C 35.317562,17.481331 39.565451,18.278588 41.636566,20.737131 L 38.183516,24.493331 C 36.236051,22.858359 34.787665,22.710631 32.403139,22.710609 C 30.901751,22.710631 30.120168,22.926362 29.484299,23.3578 C 28.848414,23.772024 28.530476,24.315664 28.530483,24.988721 C 28.530476,25.592786 28.821918,26.09328 29.404815,26.490205 C 29.987693,26.904426 31.511133,27.525729 34.549225,28.354116 C 37.958218,29.286087 40.272103,30.416513 41.490888,31.745396 C 42.691968,33.074309 43.292518,34.843296 43.292541,37.052364 C 43.292518,39.710168 42.356366,41.901988 40.484082,43.627827 C 38.629421,45.353671 36.346462,46.694998 33.061111,46.694997 C 28.832157,46.694996 23.187374,45.201054 21.630014,42.439699' sodipodi:nodetypes='cssscssssccscscscscsc'/>" +
                                "<path style='transform:scale(0.7);opacity:1;fill:#FFFFFF;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:259.50698853;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' d='M 30.375,12.875 L 30.375,19.71875 L 33.625,19.71875 L 33.625,12.875 L 30.375,12.875 z M 30.375,44.96875 L 30.375,51.125 L 33.625,51.125 L 33.625,44.96875 L 30.375,44.96875 z '/>" +
                            "</svg>" +
                        "</div>";
        let card3 = new Card(card3Front, card3Back);
        donateDialogCardStack.addCard(card3);
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