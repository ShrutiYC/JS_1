let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate)

let myCreateDate = new Date(2024,03,22)
console.log(myCreateDate.toDateString());

let myCreateDateOne = new Date(2024,02,22,10,23)
console.log(myCreateDateOne.toLocaleString());

let myTimeStamp = Date.now()
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));