// ==UserScript==
// @name         MSDocs tweaks
// @namespace    https://github.com/xparadoxical
// @author       xparadoxical
// @license      MIT
// @version      1.2
// @description  Redirects to the en-us version of the current msdocs page and expands the document outline ("In this article")
// @source       https://github.com/xparadoxical/msdocs-tweaks
// @downloadURL  https://github.com/xparadoxical/msdocs-tweaks/raw/main/script.user.js
// @icon         https://learn.microsoft.com/favicon.ico
// @grant        none
// @run-at       document-start
// @match        https://learn.microsoft.com/*
// ==/UserScript==

//en-us
let pathname = window.location.pathname.split('/');
if (pathname[1].toLowerCase() !== 'en-us') {
    pathname[1] = 'en-us';
    pathname = pathname.join('/');
    window.location.href = window.location.origin + pathname + window.location.search;
} else {
    //auto-expand
    window.addEventListener('load', (event) => {
        document.querySelector('nav#side-doc-outline button[data-show-more]').click();
        document.activeElement.blur/*unfocus*/();

        const hash = window.location.hash;
        document.getElementById(hash.substring(1)).scrollIntoView();

        const inThisArticle = document.getElementById("affixed-right-container");
        inThisArticle.style.position = "sticky";
        inThisArticle.style.top = "1.5rem"; //the default margin
    });
}
