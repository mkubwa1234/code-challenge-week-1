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

}