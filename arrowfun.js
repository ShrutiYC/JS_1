const user = {
    username: "shruti",
    price: 1230,
    welcomMesg: function name(params) {
        //console.log(`${this.username},Welcome to website`);
    }
}
user.welcomMesg()
user.username = "sam"
user.welcomMesg()

function shru() {
    let username: "shruti"
    console.log(this);
}
shru()

//arrow function
const shru = () => {
    let username = "shruti"
    console.log(this);
}
shru()
// explicit return
const addnos = (num1, num2) => {
    return num1 + num2
}
console.log(addnos(3, 5));

//implicit return
const addnos1 = (num1, num2) => (num1 + num2)
console.log(addnos1(5, 3));
return object use { }
const addnos1 = (num1, num2) => ({ usernam: "shruti" })
