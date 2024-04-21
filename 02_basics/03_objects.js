//singleton 
//Object.create

//object literals

const Jsuser = {
    name: "Raj",
    age: 18,
    email: "raj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}
//both the console.log can be used but more effective is the second one because when a object is passed with "fullname" = "Raj kumar" then there is no way that first method will be working so thats why prefer the second one and also there is one more thing that the values under an object is always a string so put "" to as shown in second one to access them.
console.log(Jsuser.email);
console.log(Jsuser["email"]);