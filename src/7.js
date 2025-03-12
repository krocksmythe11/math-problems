  
var problem = Math.floor(Math.random()*100)+1;

function solveProblem(problem) {
  let solution = 0;
  for (let i=2;i<=problem;i++) {
    if (problem%i === 0) {
      solution += i;
    }
  }
  return solution;
}

console.log("The answer is: " + solveProblem(problem));