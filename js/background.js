//let loaded = false;

// Writes the chrome storage settings options from the plugin popup box
chrome.storage.sync.get("_settings", function (settingsObj) {
  if (settingsObj["_settings"]) {
    return;
  }

  // The plugin was started for the first time, set the default values
  chrome.storage.sync.set({
    "_settings": {
      isEnabled: true,
      mode: 'count',
      intervall: 3
    }
  });
});

/*
chrome.webRequest.onBeforeRequest.addListener(function(data) {
    return {
      redirectUrl:"https://loser.com"
    };
  }, {
  urls: [
    "*://stackoverflow.com/*"
  ]
});
*/

// Scanns if active tab content executed
chrome.webNavigation['onCommitted'].addListener(function (data) {

  if (!(typeof data && data.frameId == 0)) 
    return;

    /*
  if (loaded == data.url) {
    //window.stop();
    displayMessageFromStorage();
  }
  */
    
    // Writes the chrome storage settings options from the plugin popup box
  chrome.storage.sync.get("_settings", function (settingsObj) {
    let storedIsEnabledValue = settingsObj["_settings"].isEnabled;
    // let storedMode = settingsObj["_settings"].mode;

    // Check if is the Plugin actived or not
    if (!storedIsEnabledValue) {
      return;
    }
    if (!data.url.startsWith("https://stackoverflow.com/")) {
      return;
    }

    // Proofs if there was executed the same Tag loads a lot Timess
    // Programm is "splitting" with the function await, so the other lines will also executes
    addVisit(data.url); // same as .then(function ...)
  });
});

chrome.webNavigation['onDOMContentLoaded'].addListener(function(data) {

  if (!(typeof data && data.frameId == 0)) 
    return;
    
  // Writes the chrome storage settings options from the plugin popup box
  chrome.storage.sync.get("_settings", function (settingsObj) {
    let storedIsEnabledValue = settingsObj["_settings"].isEnabled;
    let intervall = settingsObj["_settings"].intervall;

    if (!storedIsEnabledValue) {
      return;
    }
    if (!data.url.startsWith("https://stackoverflow.com/")) {
      return;
    }

    new DbsStorage().getDbsStorage(data.url, pageMetadata => {
      let visitCount = pageMetadata[data.url].timestamps.length;
  
      if (visitCount > 0) {
        chrome.browserAction.setBadgeText({text: visitCount.toString()});
      }
  
      if (visitCount >= parseInt(intervall)) {
        // Checks the requested url and show overlay when you'll visit stackoverflow to much times :-)
        // Executes the Overlay Script to show the random Message
        displayStupidMessage();
      }
    });
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
    // Try to get the existing entry
    chrome.storage.sync.get(url, function (pageMetadata) {
      
      if (!pageMetadata[url]) {
        // No entry yet -> add the initial timetamp array with a single entry
        pageMetadata = {};
        pageMetadata[url] = {
          question: null,
          highestPointAnswer: null,
          acceptedAnswer: null,
          timestamps: [new Date()]
        };
      } else {
        // Add the new timestamp to the existing array
        pageMetadata[url].timestamps.push(new Date());
      }

      // And store it back
      chrome.storage.sync.set(pageMetadata);

      // Finish the promise (this will execute the .then() of the caller )
      finished(pageMetadata);
    });
  });
  return promise;
}

// Executes the external overlay box inside the acitve tab
function displayStupidMessage() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "js/overlay.js"
    });
  });
}

// Executes the external overlay box inside the acitve tab
/*
function displayMessageFromStorage() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: "js/overlayFromStorage.js"
    });
  });
}
*/