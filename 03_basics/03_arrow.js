const user = {
    username: "Raj",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},Welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Raj"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//     let username = "Raj"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "Raj"
//     console.log(this);
// }

// chai()

// const addtwo = (num1,num2)=>{
//     return num1 + num2
// }
//const addtwo = (num1,num2)=>  num1 + num2

// const addtwo = (num1,num2)=>  (num1 + num2)
const addtwo = (num1,num2)=> ({username: "raj"})

console.log(addtwo(4,6));



const myarray = [2,4,5,6,7,8,5]

myarray.forEach()