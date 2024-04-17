//Numbers
const score = 400;
//console.log(score);
const balance = new Number(100)
// console.log(balance);

//examples of Numbers Prototypes
// console.log(balance.toString().length); 
// console.log(balance.toFixed(2));

const otherNumber = 23.8966
// const otherNumberOne = 112.8966
// const otherNumberTwo = 11123.8966

//console.log(otherNumber.toPrecision(3));
// console.log(otherNumberOne.toPrecision(4));
// console.log(otherNumberTwo.toPrecision(5));
//now toprecison is the method which generally round of the value and the number of digits that needs to be roundoff for example if the .toprecision(3) and the input value is 123.45 then it will on change the 123 which means it will only consider the first three digits and change according to it.similarly if the input value is 23.56 then it will consider the after decimal value and change according to it. There are few examples added to it.

const hundreds = 1000000
//console.log(hundreds.toLocaleString()); // this is default which leads to international system 

//console.log (hundreds.toLocaleString('en-IN'))

//+++++++++++++++Maths++++++++++++++++++++++

// console.log(Math);

// console.log(Math.abs(-4));

// abs is the absolute value which converts the negative value to positive value. It does not affect the positive the abs always returns the positive value untill and unless a negative value is given to change it into positive value.

//console.log(Math.round(4.3)); 

//its simple that it changes the value into the nearest to round off like for example 4.3 will be convert to 4 and 4.6 will be converted to 5
//console.log(Math.ceil(4.2));

// this value will always represent the top value no matter how close the number is for example 4.1 and 4.01 both will be converted to 5 because it is greater then the value.
//console.log (Math.floor(4.6));

// this is just opposite of the ceil.

//console.log(Math.min(4,3,5,6,8));
console.log(Math.random());
console.log((Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min + 1)))