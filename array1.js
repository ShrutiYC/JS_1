const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

/*marvel_heros.push(dc_heros)
console.log(marvel_heros);*/

/*const newHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);*/

/*const newHeros = [...marvel_heros,...dc_heros]
console.log(newHeros);*/

const another_arr = [1,2,[3,4,5],[7,[8,9]]]
const real_another_array = another_arr.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Shruti"))
console.log(Array.from("Shruti"));
console.log(Array.from({name : "Shruti"}));

let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score,score1,score2));