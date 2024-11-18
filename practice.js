let isover = document.querySelector("h5")

let ison =document.querySelector("#add")

let remove = document.querySelector("#remove")

ison.addEventListener("click",function(){
    isover.innerHTML="Friend"
    isover.style.color="green"

    
})

remove.addEventListener("click",function(){
    isover.innerHTML="stranger"
    isover.style.color="red"

})



