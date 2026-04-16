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

    if (bmi < 18.5) {
        document.getElementById("bmi-result").innerHTML = "Under Weight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("bmi-result").innerHTML = "Healthy Weight";
    }

    else if (bmi >= 25.0 && bmi <= 29.9) {
        document.getElementById("bmi-result").innerHTML = "Over Weight";
    }

    else {
        document.getElementById("bmi-result").innerHTML = "Obesity";
    }

}

function resetFields() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("bmi-result").innerHTML = "";
}