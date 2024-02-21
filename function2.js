//function calculateCartPrice(...num1){
//    return num1
//}
//console.log(calculateCartPrice(200,400,600));

const user = {
    username : "shruti",
    price : 166
}

function handleObject(anyoject) {
    console.log(`username is ${anyoject.username} and price is ${anyoject.price}`);
}
handleObject(user)

const myNewArray = [200,330,400,500,360]
function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue([200,330,400,500,360]));