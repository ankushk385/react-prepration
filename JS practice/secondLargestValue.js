
let numArr = [500,2,34,1,330];

const secondLargest = (arr)=>{
    
   let largestValue = Math.max(...arr);
    arr.splice(arr.indexOf(largestValue),1)
  let secondLargest = Math.max(...arr);
  console.log(largestValue,secondLargest)
    
}

secondLargest(numArr) 