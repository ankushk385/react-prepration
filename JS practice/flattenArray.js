let array = [1, [66, 42, [3, 4, 5, [1, 2.3]]]];

const flattenArray = (arr) => {
  let result = [];

  const flatten = (element) => {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        console.log("this ran if");
        flatten(element[i]);
      }
    } else {
      result.push(element);
      console.log("this ran else");
    }
  };

  flatten(arr);

  return result;
};

const required = flattenArray(array);

console.log(required);
