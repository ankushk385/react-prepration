let str = "ankush kumar";
let word = "";
let result = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    word = str[i] + word;
  } else {
    result = result + word + " ";
    word = "";
  }
}

result = result + word;

console.log(result);
