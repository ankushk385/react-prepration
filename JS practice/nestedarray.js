const arr2 = [0, 1, [2, [3, [4, 5]]]];

const nestedArray = (arr) => {
  let result = [];

  function nested(element) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        nested(element[i]);
      }
    } else {
      result.push(element);
    }
  }

  nested(arr);
  console.log(result);
};

nestedArray(arr2);
