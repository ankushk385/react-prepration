let arr = [1, 2, 3, 4, 5];
let isDuplciate = false;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      isDuplciate = true;
      break;
    }
  }

  if (isDuplciate) {
    break;
  }
}

if (isDuplciate) {
  console.log("duplciate found");
} else {
  console.log("no duplicates found");
}
