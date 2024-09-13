// document.querySelector('#owl').onclick=function(){
//     alert("owll clicked");
// }
// attachEvent()
//j-query----> on()

//  type,timestamp,default prevented
//target,toElement,srcElement,currentTarget
//clientX,clientY,screenX,screenY
//altkey,ctrlkey,shiftkey,keyCode

//event propogation--->true,false
// event bubbbling-->bottom to top when event propogation--->false
// event capturing-->top to bottom when event propogation-->true
// e.stopPropagation()-->used to stop bublling

// document.querySelector('.images').addEventListener('click',(e)=>{
//     alert("images clicked");
// },false)
// document.querySelector('#owl').addEventListener('click',(e)=>{
//     alert("owl clicked");
//     e.stopPropagation()
// },false)


// document.querySelector('#google').addEventListener('click',(e)=>{
//     e.preventDefault();
//     e.stopPropagation();
// })


// document.querySelector('.images').addEventListener(('click'),(e)=>{
//    // console.log(e.target.parentNode)
//    //console.log(e.target.tagName)
//    if(e.target.tagName==='IMG'){
//     let removeIt=e.target.parentNode;
//     removeIt.remove();
//    }
// })