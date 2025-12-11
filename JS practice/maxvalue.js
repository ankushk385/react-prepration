
let numArr = [50, 60, 32323232220, 10, 40234];


 

const max= (Arr)=>{
   let minValue = Infinity;
let maxValue = -Infinity; 
    for (let item of Arr) {

        // Find minimum value
        if (item < minValue)
            minValue = item;

        // Find maximum value
        if (item > maxValue)
            maxValue = item;


}

console.log(maxValue)
}

max(numArr)