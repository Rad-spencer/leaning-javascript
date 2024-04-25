//singleton 
//Object.create

//object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "Raj",
    age: 18,
    email: "raj@google.com",
    [mySym] : "myKey1",//this is the syntaxt to write symbol and also need to write symbol as per line 6 
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
//both the console.log can be used but more effective is the second one because when a object is passed with "fullname" = "Raj kumar" then there is no way that first method will be working so thats why prefer the second one and also there is one more thing that the values under an object is always a string so put "" to as shown in second one to access them.
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser.mySym);

Jsuser.email = "raj@chatgpt.com"// like this we can change the value inside object
// Object.freeze(Jsuser) // this is to freez the value
Jsuser.email = "raj@microsoft.com"// after freezing the object this will not be changed
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello Js User");
}

Jsuser.greetingTwo = function(){
    console.log(`hello Js User,${this.name}`);
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())