const marvel_heros = [ "thor","Ironman","spiderman"]
const dc_heros = [ "superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // this method is known as spread operators generally this method is used because multiple values or arrays can be added
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]


const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)

console.log(Array.isArray("Raj"))//to identify wheather it is an array or not
console.log(Array.from("Raj"))//to convert string to Array
console.log(Array.from({name: "Raj"}))//interesting case because it cannot convert directly because it could not identify weather to make array of keys or value so the output will be empty case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))