function solveMathProblem(problem) {
  const expression = problem.split(' ');
  let result;
  try {
    result = eval(expression[0] + ' + ' + expression[1]);
  } catch (error) {
    console.error(`Invalid math expression: ${expression.join(' ')}`);
    return null;
  }
  return `Solution: ${result}`;
}

const mathProblem = "3 + 4 * 5";
console.log(solveMathProblem(mathProblem));
