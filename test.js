// "use strict"

// const arr=[0,1,2,3,4,5]
// const arr1=arr.slice(1,3);
// console.log("A",arr)
// console.log(arr1)
// const arr2=arr.splice(1,3);
// console.log("B",arr)

// console.log(arr2)


// let arr1=[1,2,3,4,[11,22,33,44]];
// let arr2=[5,6,7,8];
// let new_arr=arr1.concat(arr2);
// console.log(new_arr);

// let new_arr=[...arr1,...arr2]; //spread operation
// console.log(new_arr);

//flat operation
// let flat_arr=arr1.flat(Infinity);
// console.log(flat_arr);

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"))
// console.log(Array.of('a','b','c'));

// const mySim=Symbol("type1");
// const Jsuser={
//     name:"harry",
//     age:25,
//     email:'jayrajgujariya076@gmail.com',
//     password:"123",
// }
// // console.log(Jsuser[mySim]);
// Jsuser.userGreet=function(){
//     console.log(`Hello ${this.name}`);
// }


// console.log(Jsuser.userGreet());

// const obj1={
//     1:'a',
//     2:'b'
// }
// const obj2={
//     3:'a',
//     4:'b'
// }
// const objN=[
//     {
//     1:'a',
//     2:'b'
//     },
//     {
//         3:'a',
//         4:'b'
//         },
    
// ]
// // const obj3=Object.assign({},obj1,obj2);
// const obj3={...obj1,...obj2}
// console.log(objN[1]);


// const Jsuser={
//     name:"harry",
//     age:25,
//     email:'jayrajgujariya076@gmail.com',
//     password:"123",
// }
// const {age:umr}=Jsuser;
// console.log(umr);


// greet("ramu");
// const greet=function(username){
//     console.log(`Hello...${username}`);
// }
// // greet("ramu");



// greet("ramu");
// function greet(username){
//     // console.log(`Hello...${username}`);
//     console.log(this.username)
// }
// greet("ramu");
// console.log(this)



// const addaTwo=(num1,num2)=>{
//     return num1+num2;
// }
// const addaTwo=(num1,num2)=>num1+num2;
// const addaTwo=(num1,num2)=>(num1+num2);
// console.log(addaTwo(3,7));



// // IEFE-Immiditely invoked function 
// (function chai(){
//     console.log("Chai pi lo bhai");
// })();
// ((name)=>{
//     console.log(`Chai pi lo bhai...${name}`);
// })('jayraj')



// //nullish collesing operator
// let num1=null??undefined??1050;
// console.log(num1);

// let age=15;
// age<18?console.log("you are not 18+"):console.log("please go and vote");


// for(let i=1;i<=5;i++){
//     // if(i==3){
//     //     break;
//     // }
//     if(i==3){
//         continue;
//     }
//     console.log(`Hello brother..${i}`);
// }
// console.log("Hello bhai");


// let arr=[1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
// }


// let mpp=new Map();
// mpp.set('.cpp',"C++");
// mpp.set('.py',"Python");
// mpp.set('rb',"Rubby");

// for(const [key,value] of mpp){
//     console.log(key,':-',value)
// }


// let myObj={
//     name:"jayraj",
//     age:20,
//     email:"jayraj@gmail.com"
// }

// for (const key in myObj) {
//    console.log(`${key}:- ${myObj[key]}`);
// }


// let arr=[1,2,3,4,5];
// for (const num in arr) {
//     console.log(arr[num])
// }

// let arr=[101,202,303,404,505];
// arr.forEach((num)=>{
//     // console.log(num)
// })

// let arr1=[11,22,33,44,55];
// arr1.forEach(function(num){
//     console.log(num);
// })

// function getNum(num){
//     console.log(num);
// }
// arr.forEach(getNum);


// const myLanguage=[
//     {
//         languageName:"python",
//         coursePrice:"500"
//     },
//     {
//         languageName:"c++",
//         coursePrice:"400"
//     },
//     {
//         languageName:"js",
//         coursePrice:"300"
//     },
// ]
// myLanguage.forEach((obj)=>{
//     console.log(obj.languageName);
// })



let arr=[1,2,3,4,5];
// let newArr=arr.forEach((num)=>num); //forEach not returning 
// let newArr=arr.filter((num)=>num>5);
// let newArr=arr.map((num)=>num+10).filter((num)=>num>15);
//reducer
let sumOfAllNum=arr.reduce((acc,num)=>acc+num,0)
console.log(sumOfAllNum)
// console.log(newArr);