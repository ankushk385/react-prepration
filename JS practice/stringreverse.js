let input = "abc def ghi ";

let word = "";
let result = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] !== " ") {
    word = input[i] + word;
  } else {
    result = result + word + " ";
    word = "";
    console.log(result);
  }
}

console.log(result);
