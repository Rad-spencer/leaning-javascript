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


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Raj",password:"123"})
        }else{
            reject('ERROR:Something went worng')
        }
    },1000)
})
promiseFour.then((user) => {
console.log(user);
return user.username
}).then((username) => {
console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


//the below code is second method to solve the problem which is known as async try catch method

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Javascript",password:"123"})
        }else{
            reject('ERROR:JS went worng')
        }
    },1000);
})

async function consumepromisFive(){
   try{
    const response = await promiseFive
   console.log(response);
   } catch(error){
    console.log(error);
   }
}

consumepromisFive()

// async function getalluser(){
// try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await response.json()
//     console.log(data);
// } catch (error) {
//     console.log("E: ",error);
// }
// }
// getalluser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))