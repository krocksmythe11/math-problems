// Generating a random math problem using JavaScript
function getRandomMathProblem() {
  // Choose a random operation (+, -, x, /)
  const operations = ['+', '-', 'x', '/'];
  const operator = operations[Math.floor(Math.random() * operations.length)];

  // Generate two random numbers
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  // Return the math problem as a string
  return `What is ${num1} ${operator} ${num2}`;
}
