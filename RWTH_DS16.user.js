// ==UserScript==
// @name         DS16
// @namespace    https://github.com/psuet/userscripts/
// @version      0.2
// @description  MathJAX FTW
// @author       Paul Sütterlin
// @match        https://www2.math.rwth-aachen.de/DS16/exquery.html
// @updateURL    https://raw.githubusercontent.com/psuet/userscripts/master/RWTH_DS16.user.js
// @downloadURL  https://raw.githubusercontent.com/psuet/userscripts/master/RWTH_DS16.user.js
// @grant        none
// @logo         https://www2.math.rwth-aachen.de/DS16/favicon.ico
// ==/UserScript==

(function() {
document.evaluate("//select[@name='format']",document,null,9,null).singleNodeValue.selectedIndex=1;

})();