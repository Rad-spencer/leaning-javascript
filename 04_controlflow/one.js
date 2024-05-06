// If statement

// if(true){
    
// }

//under this statement and condition nothing will work or be exicuted it only happens when the condition is false
// if(false){
// }

// const temperature = 41
// if(3 == 2){
// console.log("The temperature is 41 degree");
// }
// else{
//     console.log("It might have some other temp.");
// }
//comparation operator-- <,>,<=,>=,==,!=,===,!==


// const score = 200
// if (score>100){
//     const power= "fly";
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`);

//const balance = 1000
// if (balance>500) console.log("test"); this type of coding should not be practiced

// 

    const userloggedin = true
const debitcard= true
const loggedinfromgoogle = false
const loggedinfromemail = true
// if you want to check all the condition at onces then use this type of code by using && method multiple conditions can be used
if(userloggedin && debitcard) {
    console.log("Allow to buy course");
}
// if want to choise either of the of option to be true then use || symbol for or option it will be sound like this or this. 
if (loggedinfromgoogle || loggedinfromemail){
    console.log("user logged in");
}
