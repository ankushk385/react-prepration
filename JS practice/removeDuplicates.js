const arr2 = [2, 34, 2, 1, 6, 0];

const Duplicate = (arr) => {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    isDuplicate = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (currentElement == uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArray.push(currentElement);
    }
  }

  console.log(uniqueArray);
};

Duplicate(arr2);
