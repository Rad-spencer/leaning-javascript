//dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.getTimezoneOffset());

// console.log(typeof myDate);

// let mycreatedDate= new Date(2023, 0, 23)
//let mycreatedDate= new Date(2023, 0, 23,5,4)
//console.log(mycreatedDate.toLocaleString());

// let mycreatedDate = new Date("2023-01-26")
let mycreatedDate = new Date("01-26-2023")
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",

})