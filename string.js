const name = "Shruti"
const repoCount = 50

console.log(name +  repoCount + " Value");

console.log(`My name is ${name} and count of my repo is ${repoCount}`);

const gameName = new String ('ShrutiYC')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "    shruti    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shruti.com/shruti%22chavan"
console.log(url.replace('%22','-'));

console.log(url.includes('shruti'));

console.log(gameName.split('-'))