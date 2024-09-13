function setUserName(username){
    this.username=username;
    console.log("called")
    // console.log(this.username)
}

function createUser(email,password,username){
    setUserName.call(this,username)
    this.email=email;
    this.password=password;
    //console.log(this.email)
    //console.log(this.password)
}

let data=new createUser("jay@com",123,"jay")
console.log(data)