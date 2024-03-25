const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateGrossSalary(basicSalary, allowances, nhifDeduction, nssfDeduction) {
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
        if (grossSalary > bracket.min) {
            const taxableIncome = Math.min(grossSalary, bracket.max) - bracket.min;
            const bracketTax = taxableIncome * bracket.rate;
            totalTax += bracketTax;
            if (grossSalary <= bracket.max) {
                break;
            }
        }
    }

    return totalTax;
}

function runProgram() {
    rl.question("Enter your basic salary: ", (basicSalary) => {
        rl.question("Enter your allowances: ", (allowances) => {
            rl.question("Enter NHIF deduction: ", (nhifDeduction) => {
                rl.question("Enter NSSF deduction: ", (nssfDeduction) => {
                    // Convert input strings to numbers
                    basicSalary = parseFloat(basicSalary);
                    allowances = parseFloat(allowances);
                    nhifDeduction = parseFloat(nhifDeduction);
                    nssfDeduction = parseFloat(nssfDeduction);

                    // Calculate gross salary
                    const grossSalary = calculateGrossSalary(basicSalary, allowances, nhifDeduction, nssfDeduction);

                    // Calculate PAYE tax
                    const paye = calculatePAYE(grossSalary);

                    // Display results
                    console.log("Gross Salary: $" + grossSalary);
                    console.log("PAYE: $" + paye);

                    rl.close();
                });
            });
        });
    });
}

runProgram();