// Generate a random math problem
function generateProblem() {
  // Get two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  // Determine the operation to perform
  const operator = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];

  // Create a problem string
  let problem = `${num1} ${operator} ${num2}`;

  // Return the problem string
  return problem;
}
