// true  value store karta hai

const values = [1 , 2 ,3 , 4 , 5 , 6 , 7, 8, 9 , 10]

const valFilter = values.filter((item)=>{
    return item <= 5
})
console.log(valFilter)


const valFilter2 = values.filter((item)=>{
    let val = item === 5
    return val
})
console.log(valFilter2)