let grade = 80;
let gradeValue;

switch (true) {
    case (grade >= 90 && grade <= 100):
        gradeValue = "A";
        break;
    case (grade >= 80 && grade <= 89):
        gradeValue = "B";
        break;
    case (grade >= 70 && grade <= 79):
        gradeValue = "C";
        break;
    case (grade >= 60 && grade <= 69):
        gradeValue = "D";
        break;
    case (grade >= 50 && grade <= 59):
        gradeValue = "E";
        break;
    default:
        gradeValue = "Grade Not Valid";
        break;
}

console.info(gradeValue);