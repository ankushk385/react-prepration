
let numArr = [500,2,34,1,330.5,7];

const oddeven = (arr)=>{
    const evenNum = arr.filter((item)=>item%2==0)
    const oddNum = arr.filter((item)=>item%2==1)
    
    console.log("odd numbers : ",oddNum)
      console.log("even numbers : ",evenNum)
}

oddeven(numArr)