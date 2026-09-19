// ==UserScript==
// @name        Libredact-CopyBuddy
// @author      kise82
// @description Easily copy the content's original URL
// @version     1.0.0
//
// @grant       none
// @run-at      document-end
//
// @match       *://*.xcancel.com/*
// @match       *://*.redlib.catsarch.com/*
// ==/UserScript==

const MAPPING = {
  'x.com': 'xcancel.com',
  'reddit.com': 'redlib.catsarch.com',
};

(() => {
  'use strict';

  const replacement = ((hostname) => {
    for (const [old, redacted] of Object.entries(MAPPING)) {
      if (hostname.endsWith(redacted)
          && (hostname.length == redacted.length || hostname.at(-(redacted.length + 1)) == '.')) {
        return old;
      }
    }
    return null;
  })(window.location.hostname);

  if (replacement == null) {
    return;
  }
  
  const url = window.location.href.replace(window.location.hostname, replacement);

  const button = document.createElement('button');
  button.innerHTML = 'Copy original URL';
  Object.assign(button.style, {
    display: 'block',
    wigth: 'fit-content',
    fontFamily: 'sans-serif',
    fontSize: '12pt',
    color: '#FFF',
    padding: '5px 10px',
    margin: '0px auto',
    zIndex: '99',
    background: '#1F253D'
  });

  button.addEventListener('click', async () => {
    await navigator.clipboard.writeText(url);
  });

  document.body.appendChild(button);
})();
