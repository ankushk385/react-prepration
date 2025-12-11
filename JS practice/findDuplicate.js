let numArr = [12, 45, 1, 22, 1, 24, 12, 34, 45];

const findDuplicates = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !result.includes(arr[i])) {
        result.push(arr[i]);
        break; // no need to keep checking this number
      }
    }
  }

  console.log(result);
};

findDuplicates(numArr);
