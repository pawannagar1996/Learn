const values = [1 , 2 ,3 , 4 , 5 , 6 , 7, 8, 9 , 10]


const valReduce = values.reduce((storeVal , curVal)=>{
return  curVal + storeVal
},0)

//console.log(valReduce)



 const  medicine = [
    {medName : "paracetamol",
    price : 10
},
{medName : "calcium",
    price : 15
},
{medName : "iron",
    price : 5
}
 ] ;


 const medReduce = medicine.reduce((storeVal , curVal)=>{
    return  curVal.price + storeVal
    },0)

    console.log(medReduce)