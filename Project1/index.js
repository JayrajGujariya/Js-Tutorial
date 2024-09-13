let box=document.querySelectorAll('.colorPlate')
let body=document.querySelector('body')

box.forEach(function(boxx){
    boxx.addEventListener('click',function(e){
        //console.log(e);
        //console.log(e.target.id);
        body.style.backgroundColor=e.target.id;
    })
   //console.log(boxx.id)
})