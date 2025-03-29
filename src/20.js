function solveMathEquation(equation) {
    let num1 = parseFloat(equation.substring(0, equation.indexOf(' ') + 1));
    let operator = equation.substring(equation.indexOf(' ') + 1);
    let num2 = parseFloat(equation.substring(equation.indexOf(' ' + operator) + 1));

    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    }
}
