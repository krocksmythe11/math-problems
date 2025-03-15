const mathProblems = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  }
};

const randomMathProblem = mathProblems[Math.floor(Math.random() * Object.keys(mathProblems).length)];
const params = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
console.log(randomMathProblem(...params));
