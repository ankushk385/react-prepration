let inputArray = [1, 2, 2, 3, 4, 4, 5];

let removeDuplicate = (arr) => {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let isDuplicate = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (currentElement === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArray.push(currentElement);
    }
  }

  return uniqueArray;
};

const result = removeDuplicate(inputArray);

console.log(result);
