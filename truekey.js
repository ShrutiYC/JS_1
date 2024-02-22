// true key value

const userEmail = "asdfghjk@gmail.com"
if (userEmail) {
    console.log("got user email");
}
else{
    console.log("Dont have user email");
}
// false key value

const userEmail1 = ""
if (userEmail1) {
    console.log("got user email");
}
else{
    console.log("Dont have user email");
}

if (userEmail.length === 0 ) {
    console.log("array is empty");
}

const empObj = {}
if (Object.keys(empObj).length === 0) {
    console.log("Object is empty");
}

// nullish coalescing operator
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
val1 = undefined ?? 12
console.log(val1);

//terninary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");