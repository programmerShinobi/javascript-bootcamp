let weight = 70 // kg
let height = 1.72 // motor

// calculate the body mass index (BMI)
let bmi = weight / (height * height);

let weightStatus;

switch (true) {
    case (bmi < 18.5):
        weightStatus = 'Under Weight';
        break;
    case (bmi >= 18.5 && bmi <= 24.9):
        weightStatus = 'Healty Weight';
        break;
    case (bmi >= 25 && bmi <= 29.9):
        weightStatus = 'Obesity';
        break;
    default:
        weightStatus = 'Invalid Weight';
}

console.info(weightStatus); // Healty Weight