//primitive these are call by value
// 7 types : string, Number, boolean, null,undefined,bigint,Symbol

//javascript is a dynamically typed language

const score = 100
const scorevalue = 100.3

const isloggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol ('123')
const anotherId = Symbol ('123')

//console.log(id === anotherId);
const bigNumber = 45647474848464435n


// Non primitive are also known reference type: 
//  array, objects , functions

//array example
const heros = ["shaktiman", "naagraj","doga"]

//object example

let myobj=  {
 Name : "Raj",
  age  : "24",
}
//functions example
const myfunction = function(){
   // console.log("Hellp World");
}
// function datatypes always returns the function datatypes when it need to be find the typeof datatypes and this is also known as object function data type...
/* 
type of datatypes            what is returns
Undefined                   Undefined
Null                        object
Boolean                     boolean
Number                       Number
string                       String
*/

console.log(typeof myfunction);