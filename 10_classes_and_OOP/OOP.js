const user = {
    username: "Raj",
    loginCount: 8,
    signedIn:true,

    getUserDetails: function(){
        // console.log("Got User Details from Database");
        //console.log(`username: ${this.username}`);
    }
}

// console.log(user.loginCount);
// console.log(user.getUserDetails());
//console.log(this);


function User(username,loginCount,isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

 return this   //you write this or not it does not effect much
}

const userOne = new User("Raj",12,true)
const userTwo = new User("RajKumar",112,false)
console.log(userOne);
console.log(userTwo);
