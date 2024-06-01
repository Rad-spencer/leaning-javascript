const user = {
    username: "Raj",
    loginCount: 8,
    signedIn:true,

    getUserDetails: function(){
        // console.log("Got User Details from Database");
        console.log(`username: ${this.username}`);
    }
}

// console.log(user.loginCount);
// console.log(user.getUserDetails());
//console.log(this);


function user(username,loginCount,isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;


}

const userOne = user("Raj",12,true)
console.log(userOne);
