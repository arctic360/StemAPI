// ==UserScript==
// @name         StemAPI
// @namespace    https://stem.tech/
// @namespace    https://www.stem.tech/
// @namespace    https://stemplayer.com/
// @namespace    https://www.stemplayer.com/
// @version      2
// @description  Reroute production API to developer API to allow access to a multitude of functionalities.
// @author       Untitled-360 & botmert
// @match        https://stemplatform.netlify.app/*
// @match        https://www.stemplayer.com/*
// @match        https://www.stem.tech/*
// @match        https://stem.tech/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stemplayer.com
// @run-at       document-start
// @grant        none
// ==/UserScript==

// READ README.md FILE ON THE “StemAPI” REPO ON GITHUB BEFORE USING

(function() {
    "use strict";

    let oldFetch = fetch;

    function newFetch() {
        let url = arguments[0];

        url = url.replace("https://api.stemplayer.com", "https://api.sycamore-nonprod.kano.me");

        url = url.replace("https://telemetry.kes.kano.me/batch", "localhost");

        if (url.includes("device")) {
            return oldFetch(url, arguments[1]);
        }


        if (arguments.length == 2) {
            console.log(`URL:\n${url}\n\nARGS:\n${JSON.stringify(arguments[1], null, 2)}`)
            if (url === "https://api.sycamore-nonprod.kano.me/content/albums") {
            return oldFetch(url, arguments[1]);
            }
            return oldFetch(url, arguments[1]);
        }

        return oldFetch(url);
    }

    window.fetch = newFetch;

})();
