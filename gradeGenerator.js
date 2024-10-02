// studentGradeGenerator.js

function getGrade(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid input. Marks should be between 0 and 100.";
    } else if (marks >= 80) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "E";
    }
}

// Example usage
const marks = prompt("Enter student marks (0-100):");
console.log(`Grade: ${getGrade(Number(marks))}`);
