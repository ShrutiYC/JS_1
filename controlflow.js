/*const isUserLoggedIn = true
if (2 === "2"){
    console.log("executed");
}

if (2 == "2"){
    console.log("executed");
}

if (2 != "2"){
    console.log("executed");
}

if (2 !== "2"){
    console.log("executed");
}

const score = 200
if (score > 100) {
    const power = "fly"
    console.log(`User power : ${power}`)
}

const temp = 41 
if (temp > 41){
    console.log( "is greater than 41");
}
else {
    console.log("is less than 40");
}
const balance = 1000
if (balance > 500){
    console.log("less than 1000");
}
else if (balance < 750){
    console.log("less than 750");
}
else if (balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}*/

const isUserLoggedIn = true
const debitCard = true
const LoggedInfromGoogle = false
const LoggedInfromEmail = true

if(isUserLoggedIn && debitCard ){
    console.log("Allow to buy");
}

if (LoggedInfromGoogle || LoggedInfromEmail ) {
    console.log("Allowed");
}