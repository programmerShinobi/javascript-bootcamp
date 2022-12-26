// Grade
let grade = 90;
let gradeValue;

if (grade >= 90 && grade <= 100) {
    gradeValue = "A";
} else if (grade >= 80 && grade <= 89) {
    gradeValue = "B";
} else if (grade >= 70 && grade <= 79) {
    gradeValue = "c";
} else if (grade >= 60 && grade <= 69) {
    gradeValue = "D";
} else if (grade >= 50 && grade <= 59) {
    gradeValue = "E";
} else {
    gradeValue = "Grade Not Valid";
}

console.info(gradeValue);
