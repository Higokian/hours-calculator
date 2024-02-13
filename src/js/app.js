function Calculate() {
    const salaryInput = document.getElementById('salary');
    const overtimeInput = document.getElementById('overtime');
    const hoursPerWeekInput = document.getElementById('hoursPerWeek');
    const resultDisplay = document.getElementById('result');
    const calculateButton = document.getElementById('calculate');

    calculateButton.addEventListener('click', () => {
        const salary = parseFloat(salaryInput.value);
        const weeklyHours = parseFloat(hoursPerWeekInput.value);
        const total = salary * weeklyHours;
        resultDisplay.textContent = `Result: $${total}`;
    });

}