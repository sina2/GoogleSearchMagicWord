// ==UserScript==
// @name         Google Search Magic Word
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.co.jp/search?q=*
// @match        https://www.google.com/search?q=*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var magicWord = "&udm=14"

    console.log(location.href);
    console.log(location.href.indexOf(magicWord));

    if( location.href.indexOf(magicWord) == -1){
    // magicWordが見つからない場合
        location.href=location.href + magicWord;
    } ;

})();
