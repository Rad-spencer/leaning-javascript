//Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()
(function chai(){
    console.log(`DB CONNECTED`);
}()); // using () on the function can reduce the global pollution and to exicute the function one more () will required ()(). the first () is for function (function) and second one is for exicution which make it like (function)(this will be exicution which is used on chai after the function and scope for exicutation call) which will look like (function)()

// this can be used as arrow functions also like

(() => {
console.log(`DB CONNECTED TWO`);
})()

//previously there was an error this was because to use the arrow function like this method is allowed only when the previous line should end with ;

