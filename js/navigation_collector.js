// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Implements the NavigationCollector object that powers the extension.
 *
 * @author mkwst@google.com (Mike West)
 */
/**
 * Collects navigation events, and provides a list of successful requests
 * that you can do interesting things with. Calling the constructor will
 * automatically bind handlers to the relevant webnavigation API events,
 * and to a `getMostRequestedUrls` extension message for internal
 * communication between background pages and popups.
 *
 * @constructor
 */
function NavigationCollector() {
 
    // Bind handlers to the 'webNavigation' events that we're interested
    // in handling in order to build up a complete picture of the whole
    // navigation event.
    chrome.webNavigation.onBeforeNavigate.addListener(o => {
      console.log("Before navigate", o);
    });

    
    // Bind handler to extension messages for communication from popup.
    chrome.runtime.onMessage.addListener(this.onMessageListener_.bind(this));
    
  }
 
  /**
   * @typedef {{url: string, transitionType: NavigationCollector.NavigationType,
   *     transitionQualifier: Array<NavigationCollector.NavigationQualifier>,
   *     openedInNewTab: boolean, source: {frameId: ?number, tabId: ?number},
   *     duration: number}}
   */
  NavigationCollector.Request;
  ///////////////////////////////////////////////////////////////////////////////
  NavigationCollector.prototype = {
    /**
     * Returns a somewhat unique ID for a given WebNavigation request.
     *
     * @param {!{tabId: ?number, frameId: ?number}} data Information
     *     about the navigation event we'd like an ID for.
     * @return {!string} ID created by combining the source tab ID and frame ID
     *     (or target tab/frame IDs if there's no source), as the API ensures
     *     that these will be unique across a single navigation event.
     * @private
     */
    parseId_: function(data) {
      return data.tabId + '-' + (data.frameId ? data.frameId : 0);
    },
   
    /**
     * Handler for the 'onBeforeNavigate' event. Pushes the request onto the
     * 'pending_' object, and stores it for later use.
     *
     * @param {!Object} data The event data generated for this request.
     * @private
     */
    onBeforeNavigateListener_: function(data) {
      var id = this.parseId_(data);
      this.prepareDataStorage_(id, data.url);
      this.pending_[id].start = this.pending_[id].start || data.timeStamp;
    },
    /**
     * Handle messages from the popup.
     *
     * @param {!{type:string}} message The external message to answer.
     * @param {!MessageSender} sender Info about the script context that sent
     *     the message.
     * @param {!function} sendResponse Function to call to send a response.
     * @private
     */
    onMessageListener_: function(message, sender, sendResponse) {
        sendResponse({});
    }
  };