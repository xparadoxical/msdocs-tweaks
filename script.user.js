// ==UserScript==
// @name         MSDocs tweaks
// @author       xparadoxical
// @version      1.1.1
// @description  Redirects to the en-us version of the current msdocs page and expands the document outline ("In this article")
// @source       https://github.com/xparadoxical/msdocs-tweaks
// @updateURL    https://github.com/xparadoxical/msdocs-tweaks/raw/main/script.user.js
// @downloadURL  https://github.com/xparadoxical/msdocs-tweaks/raw/main/script.user.js
// @grant        none
// @run-at       document-start
// @match        https://docs.microsoft.com/*
// ==/UserScript==
let pathname = window.location.pathname.split('/');
if (pathname[1].toLowerCase() !== 'en-us') {
    pathname[1] = 'en-us';
    pathname = pathname.join('/');
    window.location.href = window.location.origin + pathname + window.location.search;
} else {
    window.addEventListener('load', (event) => {
        document.querySelector('nav#side-doc-outline button[data-show-more]').click();
        document.activeElement.blur();

        const hash = window.location.hash;
        document.querySelector("[id='" + hash.substring(1) + "']").scrollIntoView();
    });
}
