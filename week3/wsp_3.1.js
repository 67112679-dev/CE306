function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return "A";
    }
    if (score >= 70 && score <= 79) {
        return "B";
    }
    if (score >= 60 && score <= 69) {
        return "C";
    }
    if (score >= 50 && score <= 59) {
        return "D";
    }
    if (score < 50) {
        return "F";
    }
}

// ตัวอย่างการใช้
console.log(getGrade(85)); // A
console.log(getGrade(75)); // B
console.log(getGrade(65)); // C
console.log(getGrade(55)); // D
console.log(getGrade(45)); // F

