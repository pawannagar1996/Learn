
let form = document.querySelector("form");

form.addEventListener("submit" , function(e){
 
    e.preventDefault();
    
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result")

    if(height === "" , height < 0 , isNaN(height)){
        result.innerHTML = `please give a valide height ${height} `
    }else if(weight === "" , weight < 0 , isNaN(weight)){
        result.innerHTML = `please give a valide weight ${weight} `
    }else{
       const bmi = (weight / ((height * height) / 10000)).toFixed(1)
       result.innerHTML = `<span>${bmi}</span>`

       if(bmi < 18.6){
        result.innerHTML = `<span> kamjor h tu yaar ${bmi}</span>`
       }else if(bmi > 24.9){
        result.innerHTML = `<span> mota ho gaya h tu yaar ${bmi}</span>`
       } else if(bmi >= 18.6 && bmi <= 24.9){
        result.innerHTML = `<span> yaar tu healthy hai ${bmi}</span>`
       }
    }



})