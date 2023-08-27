const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((items)=>{
    console.log(items)
    items.addEventListener("click",function(e) {
        
        if(e.target.id === e.target.id){
              body.style.backgroundColor = e.target.id
        }
    })
})