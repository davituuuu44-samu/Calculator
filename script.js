
const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const expression = display.value;

        if (!expression || !/^[0-9+\-*/%.()\s]+$/.test(expression)) {
            display.value = "Error";
            return;
        }

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        display.value = Number.isFinite(result)
            ? String(Number(result.toFixed(10)))
            : "Error";
    } catch (error) {
        display.value = "Error";
    }
}
