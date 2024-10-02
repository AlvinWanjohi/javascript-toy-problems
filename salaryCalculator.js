// netSalaryCalculator.js

function calculateDeductions(basicSalary) {
    // PAYE Calculation
    let taxablePay = basicSalary; 
    let paye = 0;

    if (taxablePay <= 24000) {
        paye = taxablePay * 0.10;
    } else if (taxablePay <= 32333) {
        paye = 2400 + (taxablePay - 24000) * 0.25;
    } else if (taxablePay <= 500000) {
        paye = 2400 + 2083.25 + (taxablePay - 32333) * 0.30;
    } else if (taxablePay <= 800000) {
        paye = 2400 + 2083.25 + 50000 + (taxablePay - 500000) * 0.325;
    } else {
        paye = 2400 + 2083.25 + 50000 + 97500 + (taxablePay - 800000) * 0.35;
    }

    // NHIF Calculation
    let nhif = 0;
    if (basicSalary <= 5999) {
        nhif = 150;
    } else if (basicSalary <= 7999) {
        nhif = 300;
    } else if (basicSalary <= 11999) {
        nhif = 400;
    } else if (basicSalary <= 14999) {
        nhif = 500;
    } else if (basicSalary <= 19999) {
        nhif = 600;
    } else if (basicSalary <= 24999) {
        nhif = 750;
    } else if (basicSalary <= 29999) {
        nhif = 850;
    } else if (basicSalary <= 34999) {
        nhif = 900;
    } else if (basicSalary <= 39999) {
        nhif = 950;
    } else if (basicSalary <= 44999) {
        nhif = 1000;
    } else if (basicSalary <= 49999) {
        nhif = 1100;
    } else if (basicSalary <= 59999) {
        nhif = 1200;
    } else if (basicSalary <= 69999) {
        nhif = 1300;
    } else if (basicSalary <= 79999) {
        nhif = 1400;
    } else if (basicSalary <= 89999) {
        nhif = 1500;
    } else if (basicSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    // NSSF Calculation
    let nssf = 0;
    if (basicSalary <= 7000) {
        nssf = basicSalary * 0.06; // Tier I
    } else if (basicSalary <= 36000) {
        nssf = (7000 * 0.06) + ((basicSalary - 7000) * 0.06); // Tier I + Tier II
    } else {
        nssf = (7000 * 0.06) + (29000 * 0.06); // Tier I + Tier II capped at 36,000
    }

    // SHIF Calculation
    const shif = basicSalary * 0.0275;

    return {
        paye: paye.toFixed(2),
        nhif: nhif,
        nssf: nssf.toFixed(2),
        shif: shif.toFixed(2)
    };
}

function calculateNetSalary(basicSalary, benefits) {
    const deductions = calculateDeductions(basicSalary);
    const grossSalary = basicSalary + benefits;
    const totalDeductions = parseFloat(deductions.paye) + deductions.nhif + deductions.nssf + parseFloat(deductions.shif);
    const netSalary = grossSalary - totalDeductions;

    return {
        grossSalary: grossSalary.toFixed(2),
        netSalary: netSalary.toFixed(2),
        paye: deductions.paye,
        nhif: deductions.nhif,
        nssf: deductions.nssf,
        shif: deductions.shif
    };
}

// Example usage
const basicSalary = prompt("Enter basic salary:");
const benefits = prompt("Enter benefits:");
const salaryDetails = calculateNetSalary(Number(basicSalary), Number(benefits));
console.log(`Gross Salary: Ksh ${salaryDetails.grossSalary}, Net Salary: Ksh ${salaryDetails.netSalary}`);
console.log(`PAYE: Ksh ${salaryDetails.paye}, NHIF: Ksh ${salaryDetails.nhif}, NSSF: Ksh ${salaryDetails.nssf}, SHIF: Ksh ${salaryDetails.shif}`);
