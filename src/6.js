const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const getRandomOperator = () => ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];

const solveMathProblem = (problem) => {
  let [left, operator, right] = problem.split(' ');
  left = parseInt(left);
  right = parseInt(right);

  switch (operator) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/':
      return left / right;
  }
};
