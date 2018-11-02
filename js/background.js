// Writes the chrome storage settings options from the plugin popup box
chrome.storage.sync.get("_settings", function (settingsObj) {
  if (settingsObj["_settings"]) {
    return;
  }

// The plugin was started for the first time, set the default values
  chrome.storage.sync.set({
    "_settings": {
      isEnabled: true,
      mode: 'count'
    }
  });
});

// Scanns if active tab content executed
chrome.webNavigation['onCommitted'].addListener(function (data) {

// Writes the chrome storage settings options from the plugin popup box
  chrome.storage.sync.get("_settings", async function (settingsObj) {
    let storedIsEnabledValue = settingsObj["_settings"].isEnabled;
// let storedMode = settingsObj["_settings"].mode;
    if (!storedIsEnabledValue) {
      return;
    } 
// Proofs if there was executed the same Tag loads a lot Timess
    let visitCount = await addVisit(data.url);
    if (visitCount > 5) {
      displayYoureStupidMesssage();
    }
  });
});

/**
 * Adds a new visit to the database.
 * The key is the url and the value an array of timestamps (Dates)
 * @param {string} url The url which should be used as db key
 * @returns {Promise} A promise which resolves to the visit-count
 */
function addVisit(url) {

  let promise = new Promise((finished) => {

// Get the existing entry
    chrome.storage.sync.get(url, function (visitHistory) {

      if (!visitHistory[url]) {
// No entry yet -> add the initial timetamp array with a single entry
        visitHistory = {};
        visitHistory[url] = [new Date()];
      } else {
// Add the new timestamp to the existing array
        visitHistory[url].push(new Date());
      }

// And store it back
      chrome.storage.sync.set(visitHistory);

// Store the current length of the array in the return variable
      let newVisitCount = visitHistory[url].length;

// Finish the promise (this will execute the .then() of the caller )
      finished(newVisitCount);
    });
  });

  return promise;
}
// Executes the external overlay box inside the acitve tab
function displayYoureStupidMesssage() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "js/overlay.js"
    });
  });
};
// Check if is the Plugin actived or not
chrome.webNavigation['onCommitted'].addListener(function (data) {
  if (typeof data && data.frameId == 0) {
    chrome.storage.sync.get("_settings", function (settingsObj) {
      let storedIsEnabledValue = settingsObj["_settings"].isEnabled;
      let storedMode = settingsObj["_settings"].mode;

      if (!storedIsEnabledValue && storedMode) {
        return;
      }

      if (!data.url.startsWith("https://stackoverflow.com/")) {
        return;
      }

      console.log(chrome.i18n.getMessage('inHandler'), 'onCommitted', data);
    });
  }
});