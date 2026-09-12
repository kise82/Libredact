// ==UserScript==
// @name        Libredact
// @author      kise82
// @description Redact (redirect) social media URLs to FOSS front-ends
// @version     1.0.0
//
// @grant       none
// @run-at      document-start
//
// @match       *://*.x.com/*
// @match       *://*.reddit.com/*
// ==/UserScript==

// Front-end instances
const X = 'xcancel.com';
const REDDIT = 'redlib.catsarch.com';

(() => {
  'use strict';

  const hostname = window.location.hostname;
  let replacement = hostname;
  if (hostname.endsWith('x.com')) {
    replacement = X;
  } else if (hostname.endsWith('reddit.com')) {
    replacement = REDDIT;
  }

  window.location.replace(window.location.href.replace(hostname, replacement));
})();
