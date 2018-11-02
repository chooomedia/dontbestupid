$(function () {

    let dbsHead = $(".dbsHead");
    let dbsActivity = $("#dbsCheckbox");
    let dbsMode = $("#dbsMode");
    let dbsStatus = $(".dbsStatus");

    function setEnabled() {
        dbsActivity.prop("checked", true);
        dbsStatus.text("Plugin active");
        dbsHead.html("<h1 title='stay tuned - don`t waste your time'>" + 
        "DON`T <span style='color:red;'>BE</span>" + 
        "<br>" +
        "<span style='letter-spacing:2.4px;'>STUPID</span>" +
        "!</h1>");
        dbsMode.attr("disabled", false);
    }

    function setDisabled() {
        dbsActivity.prop("checked", false);
        dbsStatus.text("Plugin deactivated!");
        dbsHead.html("<h1 title='stop searching and doing the same thing over and over again!'>" +
        "<span style='letter-spacing:8px;'>STAY</span>" + 
        "<br>" + 
        "<span style='color:red;'>STUPID</span>" + 
        "!</h1>");
        dbsMode.attr("disabled", true);
    }

    function isCheckboxChecked() {
        return dbsActivity.prop("checked");
    }

    function getMode() {
        return dbsMode.val();
    }

    function setMode(mode) {
        return dbsMode.val(mode);
    }

    function writeSettings() {
        chrome.storage.sync.set({
            "_settings": {
                isEnabled: isCheckboxChecked(),
                mode: getMode()
            }
        });
    };

    function readSettings() {
        chrome.storage.sync.get("_settings", function (settingsObj) {
            let storedIsEnabledValue = settingsObj["_settings"].isEnabled;
            let storedMode = settingsObj["_settings"].mode;
            if (storedIsEnabledValue) {
                setEnabled();
            } else {
                setDisabled();
            }
            setMode(storedMode);
        });
    }

    // on every open ..
    readSettings();

    dbsActivity.change(function () {
        // proofs is the chrome plugin activated or not
        if (dbsActivity.prop("checked")) {
            // write values to localstorage
            setEnabled();
            writeSettings();
        } else {
            setDisabled();
            writeSettings();
        }
    });

    dbsMode.change(function () {
        writeSettings();
    });
});