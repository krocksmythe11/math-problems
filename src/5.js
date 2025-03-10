// Random math problem solver
function solveMathProblem() {
  const operations = ['+', '-', '*', '/'];
  const numbers = [1, 2, 3, 4, 5];
  const randomOperationIndex = Math.floor(Math.random() * operations.length);
  const randomNumberIndex = Math.floor(Math.random() * numbers.length);
  return `${numbers[randomNumberIndex]} ${operations[randomOperationIndex]}`;
}
