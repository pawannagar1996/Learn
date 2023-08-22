//Immediately Invoked Function Expressions IIFE

// global  function / function k pollution s bachne k liye iife use hota h

//  sentex ()()



(function pawan(name){
    console.log(`welcome ${name}`)
}
)("nagar");
//  name iife


((name) => {
    console.log(`welcome ${name}`)
}
)("ajay");