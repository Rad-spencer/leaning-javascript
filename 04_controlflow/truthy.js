const userEmail = []

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Don't have user email");
}

/* falsy values 
false, 0,-0,Bigint(0n),"",null,undefined,NaN

truthy Values
"0"(0 inside String is truthy),'False'," ", [], {}, function(){}     */

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }


const emptyObj={}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}
