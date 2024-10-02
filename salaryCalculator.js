const prompt = require('prompt-sync')();

function calculateNetSalary() {
    let basicSalary = parseFloat(prompt('Enter basic salary: '));
    let benefits = parseFloat(prompt('Enter benefits: '));
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        tax = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        tax = 2400 + (8333) * 0.25 + (grossSalary - 32333) * 0.3;
    } else if (grossSalary <= 800000) {
        tax = 2400 + (8333) * 0.25 + (176667) * 0.3 + (grossSalary - 500000) * 0.325;
    } else {
        tax = 2400 + (8333) * 0.25 + (176667) * 0.3 + (300000) * 0.325 + (grossSalary - 800000) * 0.35;
    }

    // NHIF
    let nhif = 0;
    if (grossSalary < 6000) {
        nhif = 150;
    } else if (grossSalary < 8000) {
        nhif = 300;
    } else if (grossSalary < 12000) {
        nhif = 400;
    } else if (grossSalary < 15000) {
        nhif = 500;
    } else if (grossSalary < 20000) {
        nhif = 600;
    } else if (grossSalary < 25000) {
        nhif = 750;
    } else if (grossSalary < 30000) {
        nhif = 850;
    } else if (grossSalary < 35000) {
        nhif = 900;
    } else if (grossSalary < 40000) {
        nhif = 950;
    } else if (grossSalary < 45000) {
        nhif = 1000;
    } else if (grossSalary < 50000) {
        nhif = 1100;
    } else if (grossSalary < 60000) {
        nhif = 1200;
    } else if (grossSalary < 70000) {
        nhif = 1300;
    } else if (grossSalary < 80000) {
        nhif = 1400;
    } else if (grossSalary < 90000) {
        nhif = 1500;
    } else if (grossSalary < 100000) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    // NSSF
    let nssf = grossSalary * 0.06; // Assuming both employee and employer contribute

    let netSalary = grossSalary - tax - nhif - nssf;
    console.log(`Net Salary: ${netSalary}`);
}

calculateNetSalary();
