let str = [1, 2, 4, 5];
let actualSum = 0;
let expectedSum = 0;
let n = str.length + 1;

for (let i = 0; i < str.length; i++) {
  actualSum += str[i];
}

for (let j = 1; j <= n; j++) {
  expectedSum += j;
}

console.log(expectedSum - actualSum);
