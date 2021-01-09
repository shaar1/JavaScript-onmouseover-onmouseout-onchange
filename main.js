/* gobal cosole, alert, prompt*/
/*
var myDiv = document.getElementById("div");

myDiv.onmouseover = function(){

"use strict";

  myDiv.innerHTML = " You Hovered On Me";


};
*/

/*
var myDiv = document.getElementById("div");

myDiv.onmouseout = function() {

    "use strict";

    myDiv.innerHTML = " You Have Gone";


};
*/

var

    myInput = document.getElementById("input"),

    myDiv = document.getElementById("div"),

    myCurrency = document.getElementById("currency");

    myCurrency.onchange = function(){

    
"use strict";

myDiv.innerHTML = myInput.value * 3.75;

};