//  cheking sum zero --- problem one
// [-1 , -2 , -3 , -4 , 0 , 1 , 2 , 3] = input


  const input = [-1 , -2 , -3 , -4 , 0 , 5 , 6 ,7]

function getSumPairZero(array){
for (let num of array) {
    for(let innnerIndex=1 ; innnerIndex < array.length ; innnerIndex++){
        if(num + array[innnerIndex] === 0 ){
return [num , array[innnerIndex]]
        }
        else{return "koi bhi value nahi h"}
      
    }
}
}

const output = getSumPairZero(input)

  console.log(output)