function solveMathProblem(problem) {
  const arithmetic = {add: (a, b) => a + b, subtract: (a, b) => a - b, multiply: (a, b) => a * b, divide: (a, b) => a / b};
  
  if (typeof problem !== 'string' || !problem.trim()) {
    throw new Error('Invalid input');
  }
  
  const result = arithmetic[problem]();
  
  return result;
}

// Example usage:
const mathProblem = "3 + 4 * 2 - 5";
try {
  console.log(solveMathProblem(mathProblem));
} catch (error) {
  console.error(error.message);
}
