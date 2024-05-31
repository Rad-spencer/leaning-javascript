const promiseOne = new Promise(function(resolve,reject){
//do an Async task
// DB calls, Cryptography,network

setTimeout(function(){
    console.log('Async task is complete');
    resolve()
},1000)

})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 Resolved");
})

const promiseThree = new Promise (function(resolve,reject){
    setTimeout(function(){

resolve({username: "Raj", email: "raj@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})
