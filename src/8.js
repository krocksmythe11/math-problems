const solveMathProblem = () => {
  // Generate two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  // Generate a random operation (+, -, x, /)
  const operation = ['+', '-', 'x', '/'][Math.floor(Math.random() * 4)];

  // Return the solution to the problem
  return `What is ${num1} ${operation} ${num2}`;
};
