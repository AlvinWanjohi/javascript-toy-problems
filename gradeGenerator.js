const prompt = require('prompt-sync')();

function getGrade() {
    let marks = parseInt(prompt('Enter student marks (0-100): '));

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid marks! Please enter a number between 0 and 100.");
        return;
    }

    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 49) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    console.log(`Grade: ${grade}`);
}

getGrade();

