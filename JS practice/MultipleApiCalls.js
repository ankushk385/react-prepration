function multiCalls() {
  axios
    .get("https://api.example.com/first")
    .then((response1) => {
      console.log("this is the result : ", response1.data);
      const data1 = response1.data;
      return axios.get(`https://api.example.com/first/second/${data1}`);
    })
    .then((response2) => {
      const data2 = response2.data;
      return axios.get(`https://api.example.com/first/third/${data2}`);
    })
    .then((response3) => {
      const data3 = response3.data;
      return axios.get(`https://api.example.com/first/third/${data3}`);
    })
    .catch((error) => {
      console.log("this is an error message : ", error);
    });
}
