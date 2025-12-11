const checkNum = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 15) {
      resolve("this number is greater than 15");
    } else {
      reject("this no is less than 15");
    }
  });
};
console.log(checkNum(15));
