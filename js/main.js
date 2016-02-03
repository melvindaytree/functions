/**
*
*	Write a function that will simultaneously perform a console.log() 
* and write a new paragraph to the #log div with whatever text you give it.
* You are just creating the function, NOT calling it yet. Here, I'll get you started.
* 
**/
var main = document.getElementById("log")

function fancyLog(text) {
	console.log(text);
  var para = document.createElement("p");
	var content = document.createTextNode(text);
  para.appendChild(content);
  document.querySelector("#log").appendChild(para);
  
};

/**
*
* Write a function that will automatically calcuate the two ages based on a birth 	
* year and a given year. DO NOT CALL THE FUNCTION YET. The function should use your fancyLog() 
* function above. I'll get you started here, too.
*
*/

function calculateAges(currentyear,birthyear) {
	var age1 = currentyear-birthyear;
  // Calculate age2 properly.
  var age2 = age1 - 1;
  // Now call fancyLog() with the text "If you were born in {birthYear}, your age could be {age1} or {age1}."
  fancyLog("If you were born in " + birthyear + ", your age could be " + age1 + " or " + age2 + ".");
}

/**
* Now, write a function that will convert a value (kilometers) to miles.
* Your function should RETURN the value in miles.
* DO NOT CALL THE FUNCTION YET
* I'll get you started.
*/

function kilometersToMiles(kilo){
	var miles = kilo * 0.621371;
  // Do the converstion here and set a variable "miles"
  
  return miles;
}

/** 
* Now, we're going to call our functions!
* Write a call to fancyLog() and log/display "Let's get started with functions!"
*/
fancyLog("Let's get started with functions!");
/** 
* Use javascript prompt(); to ask the user for their birth year.
* Use the results from that prompt() to call "calculateAges()"
* FOR 5 BONUS POINTS, use javascript to dynamically get the 
* current year instead of hand-coding it
* Your calculateAges() function should automatically fancyLog();
*/
var birthyear = prompt("What is your birthyear?");
var currentyear = new Date().getFullYear();
calculateAges(currentyear,birthyear);

/**
* Call your kilometersToMiles() function to convert 5K to miles. Store the returned value in a
* variable here. Use fancyLog() to display/log "5 kilometers is equal to {miles} miles."
*/

var miles = kilometersToMiles(5);
fancyLog("5 kilometers is equal to "+ miles + " miles.")