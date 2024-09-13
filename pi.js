//console.log(Object.getOwnPropertyDescriptor(Math,"PI"));
let user={
    name:"ritesh",
    age:25,
    isAvailable:false,
}
console.log(Object.getOwnPropertyDescriptor(user,'name'));
Object.defineProperty(user,'name',{
    enumerable:false
})
for (const [key,value] of Object.entries(user)) {
    console.log(`${key}:${value}`)
}
console.log(Object.getOwnPropertyDescriptor(user,'name'));