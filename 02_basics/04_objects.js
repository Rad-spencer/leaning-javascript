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

//console.log(regularUser.fullname.userfullname); // the more deep the nesting is put dot and access the value for example if you want to acess the first name then "regularUser.fullname.userfullname.firstname"

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
// const obj3 = Object.assign(obj1,obj2)
// const obj4 = Object.assign({},obj1,obj2)// both obj3 and obj4 has the same result but the difference on both of that is obj4 is best practice because when object is assign the first is the target and rest all will be souce so due to that we give an empty array to act as target so that all the source are stored on empty or else as in obj3 all the souce is stored in obj1 although both has same output but according to syntax obj4 is the best practice and even this method is least used or can be said not frequently used
// console.log(obj3);
// console.log(obj4);

const obj3 = {...obj1,...obj2}// this is seprator operator and this is used most of the time
//console.log(obj3);



//object destructuring
// this is generally--Object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables. Even better, object destructuring can extract multiple properties in a single statement, can access properties from nested objects, and can set a default value if the property doesn't exist.
const course = {
    coursename:"Raj Learning js",
    price: "999",
    courseInstructor : "Raj"
}

//course.courseinstructor

const{courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

//object API

