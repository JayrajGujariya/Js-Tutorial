let form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let height=parseInt(document.querySelector('#height').value);
    let weight=parseInt(document.querySelector('#weight').value);
    let result=document.querySelector('#result')
    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML="Please enter valid height...try again"
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML="Please enter valid weight...try again"
    }
    else{
        let bmi=(weight/((height*height/10000))).toFixed(2);
        result.innerHTML=`your bmi is:${bmi}`;
        if(bmi<18){
            console.log("Underweighted");
            let span=document.createElement('span');
            span.innerHTML="Underweighted"
            result.appendChild(span);
        }
        else if(bmi>18 && bmi<24){
            console.log("avarage");
            let span=document.createElement('span');
            span.innerHTML="avarage"
            result.appendChild(span);
        }
        else{
            console.log("overweighted");
            let span=document.createElement('span');
            span.innerHTML="overweighted"
            result.appendChild(span);
        }
    }
})