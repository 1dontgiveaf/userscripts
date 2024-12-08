// ==UserScript==
// @name         Simple Arceus Bypass
// @namespace    https://discord.gg/5vNgzbUsA3
// @version      2.0.0
// @description  Instant bypass for Arceus X.
// @author       @.idontgiveaf on discord
// @run-at       document-end

// @match        *://*.linkvertise.com/*
// @match        *://*.linkvertise.net/*
// @match        *://*.link-to.net/*


// @exclude      *://publisher.linkvertise.com/*
// @exclude      *://linkvertise.com/search*
// @exclude      *://linkvertise.com/login*
// @exclude      *://linkvertise.com/profile*
// @exclude      *://blog.linkvertise.com
// @exclude      *://blog.linkvertise.com/*
// @exclude      *://linkvertise.com/assets/vendor/*
// @exclude      *://publisher.linkvertise.com/*
// @exclude      *://link-mutation.linkvertise.com/*
// @exclude      *://linkvertise.com/assets/external/thinksuggest


// @match        https://loot-link.com/s?*
// @match        https://loot-links.com/s?*
// @match        https://lootlink.org/s?*
// @match        https://lootlinks.co/s?*
// @match        https://lootdest.info/s?*
// @match        https://lootdest.org/s?*
// @match        https://lootdest.com/s?*
// @match        https://links-loot.com/s?*
// @match        https://linksloot.net/s?*


// @match        https://spdmteam.com/key-system*


// @grant        none
// @license      Creative Commons License 4.0 (https://creativecommons.org/licenses/by-nc/4.0/)
// @downloadURL  https://github.com/1dontgiveaf/userscripts/raw/refs/heads/main/user.js
// @updateURL    https://github.com/1dontgiveaf/userscripts/raw/refs/heads/main/meta.js
// ==/UserScript==

// need help!?!?! join my discord!!!!

// Code

const url = window.location.href;
const params = new URLSearchParams(url.split('?')[1]);
const hwid = params.get("hwid");
const title = document.title;

const API = "https://spdmteam.com/api/keysystem?step=";

if (title !== 'Just a moment...') {
    if (url.includes("https://spdmteam.com/key-system-1?hwid=")) {
        alert("Complete the captcha.")
    } else if (url.includes("arceus-x-neo-key-system-1") || title.includes("NEO") && title.includes("1")) {
        window.location.href = `${API}1&advertiser=linkvertise&OS=ios`;
    } else if (url.includes("https://spdmteam.com/key-system-2?hwid=")) {
        window.location.replace("https://loot-link.com/s?fJTD");
    } else if (title.includes("NEO") && title.includes("2")) {
        window.location.replace(`${API}2&advertiser=linkvertise&OS=ios`);
    } else if (url.includes("https://spdmteam.com/key-system-3?hwid=")) {
        window.location.replace("https://loot-link.com/s?fJTE");
    } else if (title.includes("Key System 3")) {  // Fixed missing closing parenthesis here
        window.location.replace(`${API}3&advertiser=linkvertise&OS=ios`);
    }
}
