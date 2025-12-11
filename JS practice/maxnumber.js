let array1 = [12,4,6,57,90,22];

const maxNum = (arrayval)=>{
    
    const maxNumber = Math.max(...arrayval)
    console.log(maxNumber);
}

maxNum(array1)