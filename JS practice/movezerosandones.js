let num = "0001100110001";

let arr = num.split("");

let left = 0;
let right = arr.length - 1;

while (left < right) {
  if (arr[left] === "0") {
    left++;
  } else if (arr[right] === "1") {
    right--;
  } else {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

let result = arr.join("");
console.log(result);
