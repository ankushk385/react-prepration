function fetchData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        console.log(`Fetching Data : ${data}`);
        resolve(data);
      } else {
        reject(`Error No data provided`);
      }
    }, 1000);
  });
}

fetchData("user Data")
  .then((result) => {
    console.log(`data: `);
    return `2nd data ${result}`;
  })
  .then((secondResult) => {
    console.log(`another data :`);
    return `3rd Data ${secondResult} `;
  })
  .then((thirdResult) => {
    console.log(`anither 3rd result ${thirdResult}`);
  })
  .catch((error) => {
    console.log(`This is the error : ${error}`);
  });
