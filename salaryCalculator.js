// salaryCalculator.js
function calculateNetSalary(basicSalary, benefits) {
    const payee = basicSalary * 0.3; // Example tax rate
    const NHIF = 150; // Example NHIF deduction
    const NSSF = basicSalary * 0.06; // Example NSSF deduction
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - (payee + NHIF + NSSF);
    return netSalary;
}

// Example usage
const basicSalary = parseFloat(prompt("Enter basic salary: "));
const benefits = parseFloat(prompt("Enter benefits: "));
console.log(`Net Salary: ${calculateNetSalary(basicSalary, benefits)}`);
