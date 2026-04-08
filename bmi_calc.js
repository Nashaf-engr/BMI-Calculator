function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    weight = parseFloat(weight);
    height = parseFloat(height)/100;

    if (!weight || !height) {
        document.getElementById("result").innerHTML = "Enter valid values!";
        return;
    }    

    let bmi = weight / (height * height);
    bmi = parseFloat(bmi.toFixed(2));

    document.getElementById("result").innerHTML = "Your BMI is: " + bmi;
}

function resetFields() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
}