let objOne = {
    name : "pawan",
    age : 27,
    welcome : function(){
        return `this is ${this.name}`
    }
}

console.log(objOne.welcome())



function chai(){
 let userName = "pawan"

 console.log(this.userName)
}
chai()