// ==UserScript==
// @name        Libredact-CopyBuddy
// @author      kise82
// @description Easily copy the content's original URL
// @version     1.0.0
//
// @grant       none
// @run-at      document-end
//
// @match       *://*.xcancel.com/match
// @match       *://redlib.catsarch.com/*
// ==/UserScript==

const X = 'x.com';
const REDDIT = 'reddit.com';

(() => {
  'use strict';

  const hostname = window.location.hostname;
  let url = window.location.href;
  if (hostname.endsWith('xcancel.com')) {
    url = url.replace(hostname, X);
  } else if (hostname.endsWith('redlib.catsarch.com')) {
    url = url.replace(hostname, REDDIT);
  }

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
