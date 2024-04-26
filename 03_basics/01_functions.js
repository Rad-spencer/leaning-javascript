// console.log("R");
// console.log("A");
// console.log("J");
//just to do all the task at one time then we need to do function like

function sayMyName(){
//     console.log("R");
// console.log("A");
// console.log("J");
}
//sayMyName with we add () after the function then it is exicute   or else this is reference which mean sayMyName is reference and sayMyName() is known as exicute

sayMyName()

// function addTwoNumbers(number1,number2 /* under this is parameters*/ ){
//     console.log(number1 + number2);
// }

// addTwoNumbers(1,3 /* under this is Arguments*/)


function addTwoNumbers(number1,number2){
    // let result = number1 + number2;
    // return result //after return the function will not work but before return all the functions will be working and shown in the output or terminal
    //there is an easier method then above

    return number1 + number2
}
//if we want to store a value within the variable then the will be store like when the result is assign with some value within the function and excicuted outside the function then we can store anything under variable 
const result= addTwoNumbers(1,3)
// console.log("Result: ", result);

function loginusermessage(username){
    return`${username} just logged in`
}

//console.log(loginusermessage("Rajkumar"));
console.log(loginusermessage());

