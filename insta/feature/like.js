// var arr = [1,2,3,4]

// var clutter = ""

// arr.forEach(function(){         just understand
//     clutter += "hii"
    
// })

// console.log(clutter)

var arr = [
    {dp:"https://images.unsplash.com/photo-1514775820126-67d984f0c964?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1513619371302-207c0b203098?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D" 
    },

    {dp:"https://images.unsplash.com/photo-1499229694635-fc626e0d9c01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE0fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA5fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
    },

    {dp:"https://images.unsplash.com/photo-1502489971918-7bc4711788d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzY2fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDI2fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
    },

    {dp:"https://images.unsplash.com/photo-1621159226234-8a8d98f7c33e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY2fHxtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://media.istockphoto.com/id/1437091358/photo/drone-footage-of-logistic-center-in-uk.webp?a=1&b=1&s=612x612&w=0&k=20&c=bMPINzH75nfoF_m-GZZIcbciqDRGVXNdJ_K82Ke0h8I="
    },
]

var storiyan = document.querySelector("#storiyan")
var clutter =""
arr.forEach(function(elem,idx){
    clutter += ` <div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})

storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
   // console.log(dets.target.id)
   //console.log(arr[dets.target.id].story)
   document.querySelector("#full-screen").style.display = "block"
   document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

   setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
   },3000)
   
});