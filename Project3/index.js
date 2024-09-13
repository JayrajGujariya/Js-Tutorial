let time=document.querySelector('.clock');

//time.innerHTML=date.toTimeString();


setInterval(()=>{
    let date=new Date();
    time.innerHTML=date.toTimeString();
},1000)
// console.log(time)