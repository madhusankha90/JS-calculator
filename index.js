let calculation = '';

function appendToDisplay(value) {
    calculation += value;
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(calculation);
        document.getElementById('display').value = result;
        calculation = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
        calculation = '';
    }
}

function clearDisplay() {
    calculation = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = calculation;
}

function toggleDarkMode() {
    const body = document.body;
    const calculator = document.getElementById('calculator');
    const display = document.getElementById('display');
    const keys = document.getElementById('keys');
    const darkModeBtn = document.querySelector('.dark-mode-btn');

    body.classList.toggle('dark-mode');
    calculator.classList.toggle('dark-mode');
    display.classList.toggle('dark-mode');
    keys.classList.toggle('dark-mode');
    darkModeBtn.classList.toggle('dark-mode');

    const currentMode = body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
    darkModeBtn.textContent = currentMode;
}
