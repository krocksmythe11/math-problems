function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
}

function power(x, n) {
    if (n === 0) return 1;
    let result = 1;
    while (n > 0) {
        if (n % 2 === 1) {
            result *= x;
        }
        x *= x;
        n = Math.floor(n / 2);
    }
    return result;
}

function squareRoot(x) {
    let lowerBound = 1, upperBound = 1000;
    while (true) {
        let midPoint = (lowerBound + upperBound) / 2;
        if (midPoint === x) break;
        if (midPoint * midPoint < x) lowerBound = midPoint + 1;
        else upperBound = midPoint - 1;
    }
    return (upperBound + lowerBound) / 2;
}

function factorial(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}
