// ==UserScript==
// @name        Libredact
// @author      kise82
// @description Redact (redirect) social media access to FOSS front-ends
// @version     1.0.0
//
// @grant       none
// @run-at      document-start
//
// @match       *://*.x.com/*
// @match       *://*.reddit.com/*
// ==/UserScript==

// Front-end instances
const MAPPING = {
  'x.com': 'xcancel.com',
  'reddit.com': 'redlib.catsarch.com',
};

(() => {
  'use strict';

  let replacement = ((hostname) => {
    for (const old of Object.keys(MAPPING)) {
      if (hostname.endsWith(old) && (hostname.length == old.length || hostname.at(-(old.length + 1)) == '.')) {
        return MAPPING[old];
      }
    }
    return hostname;
  })(window.location.hostname);

  window.location.replace(window.location.href.replace(window.location.hostname, replacement));
})();


