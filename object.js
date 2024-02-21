// singlton can be created only constructor

//object literals are not singleton
const mySym = Symbol("key1")

const JsUser = {
    [mySym] : "mykey1",
    name : "Shruti",
    "full name" : "Shruti Chavan",
    age: 22,
    location: "Solapur",
    email: "chavanshruti@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "shrutichavan@gmail.com"

JsUser.email = "asdfghjk@gamil.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name} `);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());