function convert(){
    let uniType= document.getElementById("unitType").value;
    let inputValue =parseFloat(document.getElementById("inputValue").value)
    let result = document.getElementById("result")

    if(isNaN(inputValue))
    {
        result.textContent="0"
        return;
    }

    if (uniType=== "meter-kilometer"){
        result.textContent=(inputValue/100).toFixed(4)+ "km";

    }
    else if (uniType==="inch-centimeter"){
        result.textContent = (inputValue*2.54).toFixed(2) + "cm"
    }
}

function updatePlaceholder(){
    let unitType = document.getElementById("unitType").value;
    let inputField = document.getElementById("inputValue");

    if(unitType=== "meter-kilometer"){
        inputField.placeholder = "Enter meters"

    }
    else 
    {
        inputField.placeholder = "Enter Inches"
    }
}

