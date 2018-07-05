




const yi = "When the monkies start running the world ";
const er = "we must stop and smell the roses.";
const san = ["Fire", "Water", "Earth", "Wind", "KFC", "Tree"];
let san2 = ["Fire", "Water", "Earth", "Wind", "KFC", "Tree"];
const san3 = ["Fire", "Water", "Earth", "Wind", "KFC", "Tree", "Earth", "Wind", "KFC", "Tree", "Fire", "Water", "Earth"];
const si = { name: "fooob", age: "uncountable", powerLevel: "Over 9000!!", hair: "Long rainbow"};
const liu = [1,2,3,4,5];



function shortLength(element) {
  return element.length < 20;
}

function longLength(element) {
  return element.length > 4;
}



console.log('\n\n================== a.concat(b) ==================');
console.log(yi.concat(er));

console.log('\n\n================== a.copyWithin(x, y) ==================');
console.log(san2.copyWithin(4, 2));

console.log('\n\n================== Object.entries(a) ==================');
console.log(Object.entries(san2));
console.log(Object.entries(si));
console.log(Object.entries(si)[2]);

console.log('\n\n================== a.every(function) ==================');
console.log(san2.every(shortLength));
console.log(san2.every(longLength));

console.log('\n\n================== a.fill(x, y, z) ==================');
console.log(san2.fill('bweep'));
san2 = ["Fire", "Water", "Earth", "Wind", "KFC", "Tree"];
console.log(san2);
console.log(san2.fill("bweep", 2));
san2 = ["Fire", "Water", "Earth", "Wind", "KFC", "Tree"];
console.log(san2.fill("bweep", 2, 4));
san2 = ["Fire", "Water", "Earth", "Wind", "KFC", "Tree"];
console.log(san2);


console.log('\n\n================== a.filter(func) ==================');
console.log(san2.filter(longLength));


console.log('\n\n================== a.find(func) ==================');
console.log(san2.find(longLength));


console.log('\n\n================== a.findIndex(func) ==================');
console.log(san2.findIndex(longLength));

console.log('\n\n================== a.forEach(func(ele){foobar}) ==================');
san.forEach(function(ellen) {
  console.log(ellen);
});


console.log('\n\n================== a.includes(x) ==================');
console.log(san.includes("wind"));
console.log(san.includes("Wind"));
console.log(san.includes("Wind", 2));

console.log('\n\n================== a.indexOf(x) ==================');
console.log("-1 if not present");
console.log(san3.indexOf("Wind"));
console.log(san3.indexOf("Wind", 5));

console.log('\n\n================== Array.isArray(a) ==================');
console.log(Array.isArray(yi));
console.log(Array.isArray(san));
console.log(Array.isArray(si));


console.log('\n\n================== a.join() ==================');
console.log(san.join(" "));
console.log(san.join("@@"));
console.log(san.join("+"));


console.log('\n\n================== Object.keys(a) ==================');
console.log(Object.keys(si));


console.log('\n\n================== a.lastIndexOf(x) ==================');
console.log(yi.lastIndexOf("t"));


console.log('\n\n================== a.map( x => stuff) ==================');
console.log(san.map( ellen => ellen += "BOO"));


console.log('\n\n================== a.reduce(func(accumalator, arg2)) ==================');
function summerer(total, ellen) {
  return total + ellen;
}
function combiner(oneWord, ellen) {
  return oneWord + ellen;
}
console.log(liu.reduce(summerer));
console.log(liu.reduce(summerer, 10));
console.log(san3.reduce(combiner));


console.log('\n\n================== a.reduceRight(func) ==================');
console.log(liu.reduceRight(summerer));
console.log(san3.reduceRight(combiner));


console.log('\n\n================== a.reverse() ==================');
var qi = [1, 2, 3, 4, 5];
console.log(qi.reverse());
console.log(qi.reverse());

console.log('\n\n================== a.shift() ==================');
var qiShift = qi.shift()
console.log(qiShift);
console.log(qi);
qi.unshift(qiShift);
console.log("unshifted below VV");
console.log(qi);


console.log('\n\n================== a.slice(x,y) ==================');
console.log(san.slice(2));
console.log(san.slice(2,4));


console.log('\n\n================== a.some(func) ==================');
const hasKfc = ellen => ellen === "KFC";
console.log(san3.some(hasKfc));


console.log('\n\n================== a.sort() ==================');
console.log(san.sort());
console.log(liu.sort());


console.log('\n\n================== a.splice() ==================');
console.log(san);
console.log(san.splice(2, 4));
console.log(san.splice(2, 1, "Metal"));
console.log(san);


console.log('\n\n================== a.toString() ==================');
console.log(san.toString());
console.log(san);


console.log('\n\n================== a.valueOf() ==================');
console.log(yi.valueOf());



//NOTE:   splice can affect a const,   also   Object.entries???
