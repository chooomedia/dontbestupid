class DbsTemplate {

    constructor(wallet) {
        let imgSrv = "https://diekommune.de.cool/";

        this.wallet = wallet;
        this.closeButtonClick = null;
        this._klipKlapInterval = 0;
        
        this.logoImagePaths = [
            imgSrv + "0.svg", // original
            imgSrv + "1.svg", // empty eyes 
            imgSrv + "2.svg", // eyes closed mouth open
            imgSrv + "3.svg", // smirking eyes open
            imgSrv + "4.svg" // both closed
        ];

        this.dbsAlertMessages = [
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
    }

    getRandomMessage() {
        // Multiplies a random number with the array-length of the alert messages and logo type
        let randomMessagesIndex = Math.floor(Math.random() * Math.floor(this.dbsAlertMessages.length));
        return this.dbsAlertMessages[randomMessagesIndex];
    }

    getOverlayHtml(answer, question) {
        let message = this.getRandomMessage();
        let wallet = this.wallet;
        // Appends the following element into the body of stackoverflow
        let html =
        "<header id='dbsNavbar' class='top-bar show' style='border-top:unset;'>" +
            "<div class='-container'>" +
                "<div class='dbsHeadOver' style='height:90px'>" +
                    "<a href='#' class='left-sidebar-toggle p0 js-left-sidebar-toggle'>" +
                        "<a id='logoWrapper' href='#' title='comming soon - https://dont-be-stup.id'>" +
                        "</a>" +
                        "<div id='drDoucheDialog'>" +
                            "<nav id='dialogMenu'></nav>" +
                            message +
                        "</div>" +
                    "</a>" +
                "</div>" +
                "<li class='-main'>" +
                    "<ol class='-secondary js-secondary-topbar-links drop-icons-responsively the-js-is-handling-responsiveness'>" +
                        "<li class='-item wallet-button-item'>" +
                            "<a class='dbsLink -link' title='There are "+ wallet.balance +" Stupidollars in your Wallet'>" +
                                "<svg aria-hidden='true' class='svg-icon iconStupidollar' width='18' height='18' viewBox='0 0 18 18'>" +
                                    "<path style='opacity:1;fill:#FFFFFF;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:259.50698853;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' d='M 31.1875 0 C 13.904525 0.43835438 3.7379722e-013 14.612004 0 32 C 2.3684758e-015 49.663996 14.336004 64 32 64 C 49.663996 64 64 49.663996 64 32 C 64 14.336004 49.663996 1.3812956e-013 32 0 C 31.724 3.7007434e-017 31.461833 -0.0069580061 31.1875 0 z M 31.15625 5.5 C 31.439783 5.4910103 31.714297 5.5 32 5.5 C 46.628003 5.4999998 58.5 17.371998 58.5 32 C 58.499998 46.628001 46.628002 58.5 32 58.5 C 17.371999 58.499999 5.5 46.628002 5.5 32 C 5.4999999 17.657701 16.922915 5.9512829 31.15625 5.5 z '/>" +
                                    "<path style='font-size:53.81440353px;font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;text-align:start;line-height:100%;writing-mode:lr-tb;text-anchor:start;opacity:1;fill:#FFFFFF;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;font-family:Arial Narrow' d='M 25.645354,38.743144 C 27.706139,41.625309 33.995692,41.833441 36.155115,40.6114 C 36.947727,40.162852 37.145708,38.864507 37.145725,37.98432 C 37.145708,37.380283 36.986739,36.905677 36.668816,36.560499 C 36.333199,36.215341 35.479466,35.339232 34.490338,35.080346 C 29.473962,33.785975 25.998702,32.169274 24.638637,30.995688 C 22.942961,29.528736 22.669211,28.570622 22.669213,26.016357 C 22.669211,23.462132 23.403703,21.32133 25.064052,19.785304 C 26.724393,18.24933 29.135426,17.481331 32.297159,17.481304 C 35.317562,17.481331 39.565451,18.278588 41.636566,20.737131 L 38.183516,24.493331 C 36.236051,22.858359 34.787665,22.710631 32.403139,22.710609 C 30.901751,22.710631 30.120168,22.926362 29.484299,23.3578 C 28.848414,23.772024 28.530476,24.315664 28.530483,24.988721 C 28.530476,25.592786 28.821918,26.09328 29.404815,26.490205 C 29.987693,26.904426 31.511133,27.525729 34.549225,28.354116 C 37.958218,29.286087 40.272103,30.416513 41.490888,31.745396 C 42.691968,33.074309 43.292518,34.843296 43.292541,37.052364 C 43.292518,39.710168 42.356366,41.901988 40.484082,43.627827 C 38.629421,45.353671 36.346462,46.694998 33.061111,46.694997 C 28.832157,46.694996 23.187374,45.201054 21.630014,42.439699' sodipodi:nodetypes='cssscssssccscscscscsc'/>" +
                                    "<path style='opacity:1;fill:#FFFFFF;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:259.50698853;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1' d='M 30.375,12.875 L 30.375,19.71875 L 33.625,19.71875 L 33.625,12.875 L 30.375,12.875 z M 30.375,44.96875 L 30.375,51.125 L 33.625,51.125 L 33.625,44.96875 L 30.375,44.96875 z '/>" +
                                "</svg>" +
                                "<div class='dbsLinkTitle'>" +
                                wallet.balance +
                                "</div>" +
                            "</a>" +
                        "</li>" +
                        "<li class='-item storage-button-item'>" +
                            "<a class='dbsLink -link' title='Show saved history'>" +
                                "<svg style='color: #FFF !important;' aria-hidden='true' class='svg-icon iconInbox' width='20' height='18' viewBox='0 0 20 18'>" +
                                    "<path d='M15.19 1H4.63c-.85 0-1.6.54-1.85 1.35L0 10.79V15c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-4.21l-2.87-8.44A2 2 0 0 0 15.19 1zm-.28 10l-2 2h-6l-2-2H1.96L4.4 3.68A1 1 0 0 1 5.35 3h9.12a1 1 0 0 1 .95.68L17.86 11h-2.95z'></path>" +
                                "</svg>" +
                                "<span class='indicator-badge js-unread-count _important' style='display: none;'></span>" +
                            "</a>" +
                        "</li>" +
                        "<li class='-item help-button-item'>" +
                            "<a class='dbsLink -link' title='Open the helpcenter'>" +
                                "<svg style='color: #FFF !important;' aria-hidden='true' class='svg-icon iconHelp' width='18' height='18' viewBox='0 0 18 18'>" +
                                    "<path d='M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23zM11.77 8a5.8 5.8 0 0 1-1.02.91l-.53.37c-.26.2-.42.43-.5.69a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.03-.66.12-1.21.4-1.66a5.29 5.29 0 0 1 1.43-1.22c.16-.12.28-.25.38-.39a1.34 1.34 0 0 0 .02-1.71c-.24-.31-.51-.46-1.03-.46-.51 0-.8.26-1.02.6-.21.33-.18.73-.18 1.1H5.75c0-1.38.35-2.25 1.1-2.76.52-.35 1.17-.5 1.93-.5 1 0 1.79.18 2.49.71.64.5.98 1.18.98 2.12 0 .57-.2 1.05-.48 1.44z'></path>" +
                                "</svg>" +
                            "</a>" +
                        "</li>" +
                        "<li id='dbsDialog' class='-dialog-container js-topbar-dialog-corral' style='display: none;'>" +
                            "<div class='topbar-dialog help-dialog'>" +
                                "<div class='modal-content'></div>" +
                            "</div>" +
                        "</li>" +
                    "</ol>" +
                "</div>" +
            "</div>" +
        "</header>" +
        
        "<div class='container dbsContainer' style='position:absolute;'>" +
            "<div id='left-sidebar' data-is-here-when='md lg' class='left-sidebar js-pinned-left-sidebar'>" +
                "<div class='left-sidebar--sticky-container js-sticky-leftnav'></div>" +
            "</div>" +
            "<div id='dbsOverlay'>" +
                "<div class='inner-content clearfix'>" +
                    "<div id='question-header' class='grid' style='background: white;'>" +
                        "<h1 itemprop='name' class='grid--cell fs-headline1 fl1'" +
                        "style='margin: 5px auto 3px auto;position: relative;'>" +
                        "<div class='question-hyperlink'>" + 
                            question.title +  
                        "</div>" +
                        "</h1>" +
                    "</div>" +
                    "<div id='mainbar' class='dbsMainbar' role='main'>" + // style='box-shadow: 9px 12px 28px rgba(55,55,55,0.1);'
                        "<div class='question' id='question'>" +
                            "<div class='post-layout'>" + 
                                "<div class='votecell post-layout--left'>" +
                                    "<div class='vote'>" +
                                        answer.voteBar +
                                    "</div>" +
                                "</div>" +
                                "<div class='postcell post-layout--right'>" +
                                    "<div class='post-text'>" +
                                        answer.innerHtml +
                                    "</div>" +
                                    "<div class='post-taglist grid gs4 gsy fd-column'>" +
                                        "<div class='grid ps-relative d-block'>" +
                                        question.tags +
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
        "</div>" +
            "<div style='display:none;'>" +
                "<div class='buttonContent item-summary'>Piece of Text</div>" +
                "<div class='buttonContent item-summary'>" +
                    "" +
                "</div>" +
                "<div class='buttonContent item-summary'>" +
                    "<ul>" +
                        "<li>" +
                            "<a title='Start with the Disover-Tour'>" +
                                "Discover dont be stupid!" +
                                "<span class='item-summary'>" +
                                    "Experience the functionality of the extension and quickly learn to be more effective in your daily work" +
                                "</span>" +
                            "</a>" +
                        "</li>" +
                        "<li>" +
                            "<a title='donate us :-)'>" +
                                "Donate the Developers" +
                                "<span class='item-summary' onclick='window.location = \"https://paypal.me/choooomedia/\" + prompt(\"Donate for beer and more delicous pieces of code :-)\", \"5\");' href='#' alt='donate now -thank you!'>" +
                                    "We are grateful for any support as we put a lot of heart and soul into this project in addition to our regular work. Every piece of code a little poetry." +
                                    "</span>" +
                            "</a>" +
                        "</li>" +
                    "</ul>" +
                "</div>" +
            "</div>";
        return html;
    }

    appendBody() {
        let mainBody = document.body; // Add overlayed template before body
        let span = document.createElement("span");
            span.innerHTML = "";
            span.className = "dbsBody";
            mainBody.parentNode.insertBefore(span, mainBody); // Pushs the focusing Element before Overlay
    }

    createCloseButton() {
        let dbsButton = document.createElement("button");
        let cryptClass = document.createElement("div");
        dbsButton.disabled = true;
        dbsButton.id = "acceptButton";
        let counter = 5;
        // Deactivates the button and counts to 0
        let interval = setInterval(o => {
            dbsButton.innerHTML = counter;
            counter--;
            if (counter == 0) {
                clearInterval(interval);
            }
        },1000);

        // Deactivates the button for 5 seconds
        setTimeout(function () {
            dbsButton.innerHTML  = "okay, got it!";
            dbsButton.disabled = false;
        }, 6000);

        // Close the overlayered box over the open tab
        dbsButton.onclick = (e) => {
            chrome.tabs.update(tabs[0].id, remove());

            // Beende die Klip-Klap animation
            if (this._klipKlapInterval) {
                clearInterval(this._klipKlapInterval);
            }

            if (!this.closeButtonClick) {
                return;
            }

            this.closeButtonClick();
        };
        return dbsButton;
    }

    appendBetweenButton() {
        let span = document.createElement("span");
            span.innerHTML = "or";
            span.id = "textBetweenButtons";
        return span;
    }

    createHintButton() {
        let dbsHintButton = document.createElement("button");
        // let cryptClass = document.createElement("div");
            dbsHintButton.id = "hintButton";
            dbsHintButton.innerHTML = "get a hint";

        // Close the overlayered box over the open tab
        dbsHintButton.onclick = (e) => {
            this.wallet.withdraw(50);

            // Beende die Klip-Klap animation
            if (this._klipKlapInterval) {
                clearInterval(this._klipKlapInterval);
            }

            if (!this.closeButtonClick) {
                return;
            }

            this.closeButtonClick();
        };

        return dbsHintButton;
    }

    getNavbarButtons() {
        let navbarButtons = document.querySelectorAll(".dbsLink");
        let ignoreTheseItems = Array.from(navbarButtons);

        let isDialogOpen = false;

            function deactivateAll() {
                navbarButtons.forEach(button => {
                    // Remove all "activated" classes from all buttons
                        $(button).removeClass("activated");
                });
            }

            function shouldClickBeIgnored(clickEvent) {
                // Das DOM-Element auf das geklickt wurde
                let clickedElement = clickEvent.target;

                // Das Array mit allen Elementen dessen klicks nicht zum schliéßen führen sollen

                let cur = clickedElement;
                // laufe vom aktuellen Element bis hoch zum document.body
                while (cur) {
                    if (ignoreTheseItems.indexOf(cur) > -1) {
                        return true;
                    }
                    cur = cur.parentElement;
                }
                return false;
            }

            let currentlySelectedElement = null;

            navbarButtons.forEach(button => {
                $(button).click(function() {
                    deactivateAll();
                    if (button == currentlySelectedElement && isDialogOpen) {
                        $("#dbsDialog").hide();
                        isDialogOpen = false;
                    }else{
                        $("#dbsDialog").show();
                        $(button).addClass("activated");
                        let selectedButtonIndex = ignoreTheseItems.indexOf(button);
                        let selectedButtonContentElement = $(".buttonContent").get(selectedButtonIndex);
                        $("#dbsDialog .modal-content").get(0).innerHTML = selectedButtonContentElement.innerHTML;
                        isDialogOpen = true;
                    }
                    currentlySelectedElement = button;
                });
            });

            $(document.body).click(function(clickEvent) {
                if (shouldClickBeIgnored(clickEvent)) {
                    return; // Bei einem klick auf einen der navbarButtons soll nicht autom. geschlossen werden
                }

                if (!isDialogOpen) {
                    return;
                }
                $("#dbsDialog").hide();
                deactivateAll();
                isDialogOpen = false;
            });
    }

    drDoucheDialogMode() {
        // Close the dialog inside navigation after X seconds
        let self = this;
        let dialogElement = this.getDialogElement();
        let appendSpan = this.appendBetweenButton();

        setTimeout(function () {
        let closeButton = self.createCloseButton();
        let hintButton = self.createHintButton();
            dialogElement.innerHTML = "";
            dialogElement.appendChild(closeButton);
            dialogElement.appendChild(appendSpan);
            dialogElement.appendChild(hintButton);
        }, 5000);
    }

    insertLogoWrapper() {
        let logoWrapper = document.getElementById("logoWrapper");
        let logo = this.getLogo();

        let src = logo.src;
        let imageIndex = this.logoImagePaths.indexOf(src);
        // Append the rolling eye container into child-page Logo when logo.src is the second

        logoWrapper.innerHTML = "";
        logoWrapper.appendChild(logo);

        if (imageIndex  == 1) {
            let eyeWrapper = this.createRollEyes();
                logoWrapper.appendChild(eyeWrapper);
        }

        return logoWrapper;
    }

    getLogo() {
        // Creates the logo element
        let logoImagePath = this.getRandomImagePath();
        let logoImgElement = document.createElement("img");
            logoImgElement.id = "dbsLogo";
            logoImgElement.src = logoImagePath;

        let i = this.logoImagePaths.indexOf(logoImagePath);

        logoImgElement.onclick = () => {

            // Get the index of the next image
            if (i == this.logoImagePaths.length - 1) {
                i = 0;
            }
            i = i + 1;

            // Clear the logoWrapper DOM element
            logoWrapper.innerHTML = "";

            // Append the new logo (with the new path)
            logoImgElement.src = this.logoImagePaths[i];
            logoWrapper.appendChild(logoImgElement);

            // Append the eyes if nessecarry
            if (i == 1) {
                let eyeWrapper = this.createRollEyes();
                logoWrapper.appendChild(eyeWrapper);
            }

            let self = this;

            if (this._klipKlapInterval) {
                // Beende das Interval und starte es erneut (i == 2) wenn nötig.
                clearInterval(this._klipKlapInterval);
            }

            if (i == 2) {

                let klipKlapCount = 1;
                logoImgElement.src = self.logoImagePaths[2]; // Startet mit 1) Augen zu (50ms)

                this._klipKlapInterval = setInterval(function () {
                    switch(klipKlapCount) {
                        case 1:
                            // Mache Augen auf (1 -> 2)
                            logoImgElement.src = self.logoImagePaths[0];
                            break;
                        case 5:
                            // Mache Augen zu (2->3)
                            logoImgElement.src = self.logoImagePaths[2];
                            break;
                        case 7:
                            // Mache Augen auf (3 -> 4)
                            logoImgElement.src = self.logoImagePaths[0];
                            break;
                        case 70:
                            // Mache Augen zu (4 -> 1)
                            logoImgElement.src = self.logoImagePaths[2];
                            klipKlapCount = 0;
                            break;
                    }
                    klipKlapCount++;
                }, 90);

            } 
        };
        
        return logoImgElement;
    }

    getRandomImagePath() {
        let imageIndex = Math.floor(Math.random() * Math.floor(this.logoImagePaths.length));
        return this.logoImagePaths[imageIndex];
    }

    getDialogElement() {
        let dialogElement = document.getElementById("drDoucheDialog");
        return dialogElement;
    }

    // Creates and append into the logoWrapper the rolling eye container
    createRollEyes() {
        let eyeWrapper = document.createElement("span");
        eyeWrapper.id = "rollingEyes";
        eyeWrapper.innerHTML =
            "<span class='ball rotateEyeLeft'>.</span>" +
            "<span class='ball rotateEyeRight'>.</span>";
        setTimeout(function () {
            eyeWrapper.style.display = "block";
        }, 3);
        return eyeWrapper;
    }

        // Sets the Height of the overlay parent div
    getValuesFromParrentPage() {
        let mainBarEl = document.getElementById("mainbar");
        let dbsMainbar = document.getElementsByClassName("dbsMainbar");
            dbsMainbar[0].style.height = mainBarEl.offsetHeight + 'px';
        $("html, body").animate({ scrollTop: 0 }, "slow");
        this.getNavbarButtons();
        return dbsMainbar;
    }
}