function solveMathProblem(problem) {
  const result = performCalculation(problem);
  return result;
}

function performCalculation(expression) {
  // Add your expression evaluation logic here
  if (expression.includes('math-problems')) {
    return Math.abs(eval(expression));
  } else {
    throw new Error(`Invalid expression: ${expression}`);
  }
}
