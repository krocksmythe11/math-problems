const numbers = [1, 2, 3, 4, 5];
const operations = ['+', '-', '*', '/'];
let result = '';
for (let i = 0; i < numbers.length - 1; i++) {
  result += `${numbers[i]} ${operations[Math.floor(Math.random() * operations.length)]} `;
}
result += `${numbers[numbers.length - 1]}`;
console.log(result);
