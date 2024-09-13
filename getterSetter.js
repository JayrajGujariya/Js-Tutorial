class User{
   constructor(username,email){
    this.username=username;
    this.email=email;
   }
   get(){
    return this._username;
   }
   set(username){
    this._username=username;
   }
};
const obj=new User("jayraj","gujriyajayraj@gmail.com")
console.log(obj.username);