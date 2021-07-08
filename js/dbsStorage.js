
class DbsStorage {
    constructor() {
    }
    /**
     * Gets the saved Elements from Parent Page saveid in local storage for offline functionality
     */

    getDbsStorage(url, callback) {
        // let soUrl = window.location.href;
        // Reads the chrome storage and proofs
        chrome.storage.sync.get(url, function (pageMetadata) {
            if (!pageMetadata) {
                return;
            } 
            callback(pageMetadata);
            // console.log(pageMetadata[url]);
        });  
    }
}