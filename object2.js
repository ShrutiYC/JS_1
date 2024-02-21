const tinderuser = new Object()
tinderuser.id = "123ddfghj"
tinderuser.name = "Samm"
tinderuser.isLoggedIn = false

//console.log(tinderuser);

const regularUser = {
    email : "asdfgh@gmail.com",
    fullname :{
        userfullname : {
            firstname : "Shruti",
            lastname : "Chavan"
        }
    }
}
//console.log(regularUser);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

//const obj3 = { obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)


const obj3 = {...obj1,obj2}
console.log(obj3);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isLoggedIn'));