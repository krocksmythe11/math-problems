function getRandomMathProblem() {
  // Generate two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  
  // Generate a random operation (+, -, x, /)
  const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  
  let problem = '';
  
  // Build the math problem as a string
  if (operator === '+') {
    problem = `${num1} + ${num2}`;
  } else if (operator === '-') {
    problem = `${num1} - ${num2}`;
  } else if (operator === '*') {
    problem = `${num1} x ${num2}`;
  } else {
    problem = `${num1} / ${num2}`;
  }
  
  return problem;
}
