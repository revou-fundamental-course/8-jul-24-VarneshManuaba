// ini javascript 

function updateResult() {
    let weightValue = document.querySelector('#input-berat-badan').value;
    console.log(weightValue);
    //
    weightValue != null && weightValue != '' 
    
     document.querySelector('#bmi-result').innerHTML = weightValue;
     alert('tolong input data anda');


}

