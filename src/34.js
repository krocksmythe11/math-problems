// Example of generating a random JavaScript code for a project named "Math-Problems"

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
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function exponentiate(base, exponent) {
  return Math.pow(base, exponent);
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = n; i > 1; i--) {
      result *= i;
    }
    return result;
  }
}

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  return str[0] === str[str.length - 1];
}

// Example usage of the functions
console.log(add(3, 5)); // Output: 8
console.log(subtract(5, 3)); // Output: 2

console.log(multiply(4, 6)); // Output: 24
console.log(divide(10, 2)); // Output: 5

console.log(exponentiate(2, 3)); // Output: 8
console.log(factorial(3)); // Output: 6

console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("world")); // Output: false
