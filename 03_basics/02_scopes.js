//{} this is known as scopes there are {} curly braces they are for object delcarations if this curly braces comes under if else or function then it is known as scope of the program
//var c = 300

let a = 300
if (true) {
    let a = 10
const b =20
//console.log("Inner: ",a);
}

//console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="Raj"
    function two(){
        const website = "youtube"
       // console.log(username);
    }
    //console.log(website);
    two()
}
one()


if (true) {
    const username = "Raj"
    if (username==="Raj") {
        const website = " youtube"
       // console.log(username + website);
    }
   // console.log(website);
    
    
}
//console.log(username);


//++++++++++++++++ Interesting +++++++++++++

function addone(num){
    return num + 1
}

console.log (addone(5));

const addtwo = function (num){
    return num + 2
}
console.log (addtwo (5));

