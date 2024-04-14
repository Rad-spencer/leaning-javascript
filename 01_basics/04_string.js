const name = "Raj"
const repocount = 50

// console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

// this method is modern way and also be called as string interpolation

const gameName = new String('Raj-kumar')

// console.log(gameName [0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('j'));


const newString = gameName.substring(0,4)
console.log(newString);  
//note that the substring used as the range only shows till the final range -1 for example if the range is from 0 to 4 and the output to be shown is only be used till 3rd like Raj-kumar is the name and the range is from 0 to 4 then output will only be till Raj-  as R is in the 0th place and j is 2nd and - is 3rd.... and also it does not accept the negative value

const anotherString = gameName.slice(-8, 4)
console.log (anotherString)
//note that this can include the negative value and which does is that it starts from the back of the name like example Raj-kumar if negative value is used then it will consider from back.

const newStringOne= "   Raj   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://raj.com/raj%20kumar";

console.log(url.replace('%20','-'))

console.log(url.includes('raj'))
console.log(url.includes('sen'))

//includes is the method to find weather or not that particular ('') is available or not
// and replace is for replacing the value and also trim is to avoid the spaces 

// suppose 
const newgameName = new String('Raj-kumar-sen')
//to split this name based on dashes or spaces it depends on demand  to do that this needs to be done
console.log(newgameName.split('-'));// insteed of - (dash there can be space to separate)