//const tinderUser = new Object() // this is singleton method
const tinderUser = {}
//both will have same out put the only differance is the object property

tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isloggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Raj",
            lastname: "Kumar",
        }
    }
}

console.log(regularUser.fullname.userfullname); // the more deep the nesting is put dot and access the value for example if you want to acess the first name then "regularUser.fullname.userfullname.firstname"

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const