let firstPromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve();
        console.log("first promises")
    },1000)
})
firstPromise.then(function(){
    console.log("Promises resolve");
})
new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve();
        console.log("second promises")
    },1000)
}).then(function(){
    console.log("Second Promises resolve");
})
let thirdPromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"jayraj",age:20});
        console.log("third promises")
    },1000)
})
thirdPromise.then(function(user){
    console.log(user);
})
let fourthPromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("fourth promises")
        let error=true;
        //  let error=false;
        if(!error){
            resolve({name:"jayraj",age:20});
        }
        else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})
fourthPromise.then(function(user){
    console.log(user);
    return user.name;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("finally block executed weathe promises resolved or rejected")
})
 

let fifthPromise=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("fifth promises")
        //let error=true;
        let error=false;
        if(!error){
            resolve({name:"jayraj",age:20});
        }
        else{
            reject('ERROR:Something went wrong')
        }
    },1000)
});

async function fifthPromiseResult(){
   try {
    const data=await fifthPromise;
    console.log(data)
   } catch (error) {
    console.log('ERROR:Something went wrong')
   }
}
fifthPromiseResult();


async function getData(){
    try {
    let data=await fetch('https://jsonplaceholder.typicode.com/users');
    let result=await data.json();
    console.log(result);
    } catch (error) {
        console.log(error)
    }
}

getData();

// fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
//     return response.json()
// }).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })
