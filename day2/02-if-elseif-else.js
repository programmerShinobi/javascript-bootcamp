let weight = 70 // kg
let height = 1.72 // motor

// calculate the body mass index (BMI)
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
    weightStatus = 'Under Weight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
    weightStatus = 'Healthy Weight';
} else if (bmi >= 25 && bmi <= 29.9) {
    weightStatus = 'Over Weight';
} else {
    weightStatus = 'Obesity';
}

console.info(weightStatus);