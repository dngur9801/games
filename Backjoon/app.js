const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n"); // ex: 10 5 = [ '10 5' ]

//input = input[0]; // '10' '5'
//input = input.split(" ").map((item) => +item); // [10,5]
const numbers = [];
for (let i = 0; i < input.length - 1; i++) {
  const teamInput = input[i].split(" ").map((item) => +item);
  numbers.push({ A: teamInput[0], B: teamInput[1] });
}

solution(numbers);
function solution(testcaseArray) {
  let idx = 0;
  while (idx < testcaseArray.length) {
    const A = testcaseArray[idx].A;
    const B = testcaseArray[idx].B;
    const sum = A + B;
    console.log(sum.toString());
    idx++;
  }
}
