let arr = [1, 3, 4, 5];
let isSorted = false;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    isSorted = true;
  }
}
if (!isSorted) {
  console.log("array is sorted");
} else {
  console.log("array is not sorted");
}
