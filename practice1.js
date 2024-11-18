let isout = document.querySelector("h5");
let btn=document.querySelector("#add");

var check =0;

let=add.addEventListener("click",function(){
    if(check == 0){

    isout.innerText="Accept"
    isout.style.color="green"
    btn.innerHTML="Remove Friend"
    
    check = 1;
    }

    else{

    isout.innerText="stranger"
    isout.style.color="red"
    btn.innerHTML="Add Friend"
    
    check = 0;

    }
})

