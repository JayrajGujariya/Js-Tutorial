class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    callMe(){
        console.log(`Hello...${this.name}`)
    }
    static accountDetail(){  //
        console.log("Access denieded")
    }
}
class Teacher extends User{
    constructor(name,password){
        super(name); //super keyword not require to call in class
        //this.name=name;
        this.password=password;
    }
}
const usre1=new User('jay','jay@.com')
const usre2=new Teacher('ritesh','ritesj@.com')
usre1.callMe();
usre2.callMe();
// User.accountDetail(); //access through classname is alllowed not need to create object