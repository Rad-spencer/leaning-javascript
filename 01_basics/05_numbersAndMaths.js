//Numbers
const score = 400;
console.log(score);
const balance = new Number(100)
console.log(balance);

//examples of Numbers Prototypes
console.log(balance.toString().length); 
console.log(balance.toFixed(2));

const otherNumber = 23.8966
// const otherNumberOne = 112.8966
// const otherNumberTwo = 11123.8966

console.log(otherNumber.toPrecision(3));
// console.log(otherNumberOne.toPrecision(4));
// console.log(otherNumberTwo.toPrecision(5));
//now toprecison is the method which generally round of the value and the number of digits that needs to be roundoff for example if the .toprecision(3) and the input value is 123.45 then it will on change the 123 which means it will only consider the first three digits and change according to it.similarly if the input value is 23.56 then it will consider the after decimal value and change according to it. There are few examples added to it.

