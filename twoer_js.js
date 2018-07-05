var oneser = 15445;
var twoser = 2222;
var oneXTwoser = eval("oneser * twoser");
var onePlusTwoser = eval("oneser + twoser")


var xer1 = true;
var xer2 = false;
var xer3 = new Date();
var xer4 = "999";
var xer5 = "999 888";
var cuff = parseFloat("10.33");
var dee = parseFloat("34 45 66");
var ek = parseFloat("   60   ");
var floop = parseFloat("40 years");


var jsonObj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');


// document.getElementById("demo").innerHTML = jsonObj.firstName;

console.log("========== GLOBAL ==========");
console.log(oneser.NaN);
console.log("multiply: " + oneXTwoser);
console.log("adding: " + onePlusTwoser);
console.log(isFinite(oneser));
console.log("isNan don' work gud.");
console.log(Number(xer1), Number(xer2), Number(xer3), Number(xer4), Number(xer5));
console.log(cuff, dee, ek, floop);
console.log(String(oneser) + "  " + String(twoser));
console.log(jsonObj);
console.log(JSON.stringify(jsonObj));
console.log(jsonObj.firstName);



console.log("========== MATH. ==========");
var mathArr = [23, 11, 7, 89, 99, 10, 9, 54, 65, 23, 26];
var rounder = 34.8366777;


console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.LOG2E);
console.log(Math.abs(-2.43));
console.log(Math.acos(0.2));
console.log(Math.acosh(20));
console.log(Math.asin(0.2));
console.log(Math.asinh(0.2));
console.log(Math.atan(0.2));
console.log(Math.atan2(2, 4));
console.log(Math.atanh(0.2));
console.log(Math.cbrt(27));
console.log(Math.log(10));
console.log(Math.max(...mathArr));
console.log(Math.min(...mathArr));
console.log(Math.pow(3, 4));
console.log(Math.random() * 4);
console.log(Math.round(rounder));
console.log(Math.trunc(rounder));


console.log("\n\n========== NUMBER ==========");
var numberer = 2343.123456;

console.log(numberer);
console.log(numberer.toExponential());
console.log(numberer.toExponential(4));
console.log(numberer.toFixed(3));
console.log(numberer.toPrecision(3));
console.log(numberer.valueOf());


console.log("\n\n========== JS OPERATORS ==========");
var thisGuy = {
  firstName: "Ronald",
  lastName: "Gulphwux",
  age: 55
}

console.log(thisGuy);
delete thisGuy.firstName;
console.log(thisGuy);
thisGuy.firstName = "Herald";
console.log(thisGuy);

console.log(5 in mathArr);
console.log(89 in mathArr);
console.log("length" in mathArr);

console.log("\n\ninstanceof");
console.log(thisGuy instanceof Array);
console.log(thisGuy instanceof Object);
console.log(thisGuy instanceof Number);


console.log("\n\n========== JS STATEMENTS ==========");
for (let ellen of mathArr) {
  console.log(ellen);
  if (ellen == 10) {
    break;
  }
}

for (let ellen in thisGuy) {
  console.log(ellen);
}

let guyAge = thisGuy.age;

switch (true) {
  case (guyAge < 11):
    console.log("Ben 10");
    break;
  case (guyAge >= 11 && guyAge < 55):
    console.log("Earlyish 20s");
    break;
  case (guyAge >= 55 && guyAge < 73):
    console.log(guyAge + " is a Nice age");
    break;
  case (guyAge > 74):
    console.log("Getting up there");
    break;
}


console.log("\n\n========== String Methods ==========");
var stringer = "Here comes all the other dolphins who don't agree with you.";
var bstringer = "Jumping over the fence to find the gold in the garden.";
var cat = "cat ";
var uppers = "WHEN DID THAT HAPPEN??";
var trimmer = "   Get ready for a hair cut.    "

console.log(stringer.charAt(25));
console.log(stringer.charCodeAt(25));
console.log(stringer.endsWith("you."));
console.log(String.fromCharCode(100));
console.log(stringer.includes("dolphins"));
console.log(stringer.indexOf("dolphins"));
console.log(stringer.lastIndexOf("a"));
console.log(stringer.localeCompare(bstringer));
console.log(stringer.localeCompare(stringer));
console.log(bstringer.localeCompare(stringer));
console.log(stringer.match(/er/g));
console.log(cat.repeat(4));
console.log(stringer.replace("dolphins", cat));
console.log(stringer.search("dolphins"));
console.log(stringer.slice(25));
console.log(stringer.slice(25, 50));
console.log(stringer.slice(25, 50).split(" "));
console.log(stringer.startsWith("Here comes"));
console.log(stringer.substr(5, 20));
console.log(stringer.substring(5, 20));
console.log(uppers.toLocaleLowerCase());
console.log(uppers.toLocaleLowerCase().toLocaleUpperCase());
console.log(numberer.toString());
console.log(typeof numberer);
console.log(trimmer);
console.log(trimmer.trim());
