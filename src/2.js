  const getRandomMathProblem = () => {
    let problemType = Math.floor(Math.random() * 2) + 1;
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let sum = num1 + num2;
    let problem = "";
  
    if (problemType === 1) {
      problem = `${num1} + ${num2}`;
    } else if (problemType === 2) {
      problem = `${num1} - ${num2}`;
    }
  
    return `${problem} =`;
  };