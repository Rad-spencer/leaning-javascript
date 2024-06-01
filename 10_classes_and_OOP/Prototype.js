// let myName = "Raj     "

// console.log(myName.truelength);

let myHeros = ["Thor","Spiderman"]
let heroPower = {
    thor: "Hammer",
    spiderman: "sling",
    getsipderpower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.raj = function(){
    console.log(`Raj is present in all object`);
}

//heroPower.raj()
myHeros.raj()