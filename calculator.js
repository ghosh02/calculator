let btns=document.querySelectorAll(".btn");
let screen=document.querySelector(".screen")
btns.forEach(function(button){
    button.addEventListener("click",function(e){
        let value=e.target.dataset.num;
        screen.value+=value;
    })
});
 

let equal=document.querySelector(".btn-equal");
equal.addEventListener("click",()=>{
    if(screen.value===''){
        screen.value=" ";
    }
    else{
        let ans=eval(screen.value);
        screen.value=ans;
    }
})

let clears=document.querySelector(".btn-clear");

clears.addEventListener("click",()=>{
    screen.value='';
})

let del=document.querySelector(".btn-del");

del.addEventListener("click",()=>{
    screen.value= screen.value.slice(0,-1);
    
})