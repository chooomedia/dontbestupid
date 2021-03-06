$(function () {
// The initial variables
    let dbsHead = $(".dbsHead");
    let dbsActivity = $("#dbsCheckbox");
    let dbsMode = $("#dbsMode");
    let dbsStatus = $(".dbsStatus");
    let dbsCounter = $("#dbsAlertCounter");

// Shows the functions if plugin enabled
    function setEnabled() {
        dbsActivity.prop("checked", true);
        dbsStatus.text("Plugin active");
        dbsHead.html("<h1 title='stay tuned - don`t waste your time'>" +
            "DON`T <span style='color:red;'>BE</span>" +
            "<br>" +
            "<span style='letter-spacing:2.4px;'>STUPID</span>" +
            "!</h1>");
        dbsMode.attr("disabled", false);
        dbsCounter.val(3);
        dbsCounter.attr("disabled", false);
    }

// Disable the plugin
    function setDisabled() {
        dbsActivity.prop("checked", false);
        dbsStatus.text("Plugin deactivated!");
        dbsHead.html("<h1 title='stop searching and doing the same thing over and over again!'>" +
            "<span style='letter-spacing:8px;'>STAY</span>" +
            "<br>" +
            "<span style='color:red;'>STUPID</span>" +
            "!</h1>");
        dbsMode.attr("disabled", true);
        dbsCounter.attr("disabled", true);
    }
// Fires the checked atribute from the checkbox input
    function isCheckboxChecked() {
        return dbsActivity.prop("checked");
    }
// Get the actual Value from the active checkbox input
    function getMode() {
        return dbsMode.val();
    }
// 
    function setMode(mode) {
        return dbsMode.val(mode);
    }

    function getAlertCounterValue() {
        return dbsCounter.val();
    }

    function setAlertCounterValue(intervall) {
        return dbsCounter.val(intervall);
    }
// Writes the inputted input settings into the chrome storage
    function writeSettings() {
        chrome.storage.sync.set({
            "_settings": {
                isEnabled: isCheckboxChecked(),
                mode: getMode(),
                intervall: getAlertCounterValue()
            }
        });
    };
// Reads the chrome storage and proofs
    function readSettings() {
        chrome.storage.sync.get("_settings", function (settingsObj) {
            let storedIsEnabledValue = settingsObj["_settings"].isEnabled;
            let storedMode = settingsObj["_settings"].mode;
            let alertCounterValue = settingsObj["_settings"].intervall;
            if (storedIsEnabledValue) {
                setEnabled();
            } else {
                setDisabled();
            }
            setMode(storedMode);
            setAlertCounterValue(alertCounterValue);
        });
    }

// On every open ..
    readSettings();

    dbsActivity.change(function () {
// Proofs is the chrome plugin activated or not
        if (dbsActivity.prop("checked")) {
            // Write values to localstorage
            setEnabled();
            writeSettings();
        } else {
            setDisabled();
            writeSettings();
        }
    });
// Writes the Options into Function if there is some changes inside the inputs
    dbsMode.change(function () {
        writeSettings();
    });

    dbsCounter.change(function () {
        writeSettings();
    })
});