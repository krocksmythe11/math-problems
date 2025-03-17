// Generating a random math problem
const min = 1;
const max = 10;
const operator = ['+', '-', 'x'];

function generateMathProblem() {
  const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
  const op = operator[Math.floor(Math.random() * operator.length)];
  let result;
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case 'x':
      result = num1 * num2;
      break;
  }
  return `${num1} ${op} ${num2} = ${result}`;
}
