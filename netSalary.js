const prompt = require("prompt-sync")({ sigint: true });

function calculateGrossSalary(basicSalary, allowances = 200, nhifDeduction = 2300, nssfDeduction = 2100) {
    // Calculate total deductions
    const totalDeductions = nhifDeduction + nssfDeduction;

    // Calculate gross salary
    const grossSalary = basicSalary + allowances - totalDeductions;

    return grossSalary;
}

function calculatePAYE(grossSalary) {
    const taxBrackets = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24001, max: 32333, rate: 0.25 },
        { min: 32334, max: Infinity, rate: 0.3 }
    ];

    let totalTax = 0;

    for (const bracket of taxBrackets) {
        if (grossSalary <= bracket.min) {
            break;
        }

        const taxableIncome = Math.min(grossSalary, bracket.max) - bracket.min;
        totalTax += taxableIncome * bracket.rate;
    }

    return totalTax;
}

function runProgram() {
    const basicSalary = parseFloat(prompt("Enter your basic salary: "));
    const grossSalary = calculateGrossSalary(basicSalary);
    const paye = calculatePAYE(grossSalary);

    console.log("Gross Salary: $" + grossSalary);
    console.log("PAYE: $" + paye);
}

runProgram();