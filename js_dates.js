
console.log("Units");
console.log('------------');
console.log(new Date());
console.log(new Date().getMilliseconds());
console.log(new Date().getSeconds());
console.log(new Date().getMinutes());
console.log(new Date().getDay());
console.log(new Date().getMonth());
console.log(new Date().getYear());

console.log();
console.log("Date Methods");
console.log('------------');
let dater = new Date();
console.log(dater.getDate());
console.log(dater.getFullYear());
console.log(dater.getHours());
console.log(dater.getTime());
console.log(dater.getTimezoneOffset(), 'minutes');
console.log('VVV Day of the month');
console.log(dater.getUTCDate());
console.log(dater.getUTCFullYear());
console.log(dater.getUTCMilliseconds());
console.log(Date.now());
console.log('dater difference VVV');
console.log(Date.now() - dater);
console.log(Date.parse(new Date()));
console.log(dater.setDate(22));
console.log(dater.toDateString());
console.log(dater.toGMTString());
// console.log(dater.ISOString());
console.log(dater.toJSON());
console.log(dater.toLocaleDateString());
console.log(dater.toLocaleString());
console.log(dater.valueOf());
