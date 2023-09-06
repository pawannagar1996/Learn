let randomColor = function(){
    let hexa = "0123456789abcdef"
    let color = "#"
    for(let i = 0 ; i < 6 ; i++){
 color += hexa[Math.floor(Math.random() *  16)]
    }

    return color
}
let timeCntrl ;  
const startChangingColor = function(){
   if(!timeCntrl){
    timeCntrl = setInterval(bodyChangeColor , 2000)
   }


  function bodyChangeColor(){
    let bodyColor = document.body.style.backgroundColor = randomColor()
    let font = document.querySelector("#main")
    let fontColor = font.style.color = randomColor()

    if(fontColor === bodyColor){
        let fontColor = font.style.color = randomColor()
    }
    console.log(`font color is ${fontColor} and bgcolor is ${bodyColor}`)
} 
}

const stopChangingColor = function(){
    clearInterval(timeCntrl)
    timeCntrl = null ;
    console.log("stoped")

}

  let start = document.querySelector("#start").addEventListener("click" , startChangingColor)

  let stop = document.querySelector("#stop").addEventListener("click" , stopChangingColor)



