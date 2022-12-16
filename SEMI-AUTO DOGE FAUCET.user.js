/// ==UserScript==
// @name         SEMI-AUTO DOGE FAUCET
// @namespace    Claim Free Doge
// @version      1.0
// @description  Claim Free Doge
// @author       lotocamion
// @match        https://ezcoin.it/?r=DMD3she4DjvAJRSynCh8gjw7feKZBMWBDK
// @match        https://ezcoin.it/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

  /////EDIT YOUR ADDRESS BELOW/////
     var doge = "DMD3she4DjvAJRSynCh8gjw7feKZBMWBDK";/////EXAMPLE/////
     var clicked = false;
     if(document.getElementsByClassName("form-control")[0]) {
     document.getElementsByClassName("form-control")[0].value = doge;
     }
     setInterval(function() {
     if ((!clicked && document.querySelector(".h-captcha > iframe") && document.querySelector(".h-captcha > iframe").getAttribute("data-hcaptcha-response").length > 0) && (clicked == false)) {
     document.getElementsByClassName("btn btn-primary btn-lg claim-button")[0].click();
     clicked = true;
     }}, 8000);
     if(document.getElementsByClassName("btn btn-info")[0]) {
     document.getElementsByClassName("btn btn-info")[0].click();
     }
     })();