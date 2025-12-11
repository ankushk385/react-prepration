let array1 = [12,4,6,57,90,22];

const returneven = (arr)=>
{
  let i  ;
  let newarr = [];
  
        //  first method
    
    // for (i=0;i<arr.length;i++){
        
    //     if(arr[i]%2===0){
    //         newarr.push(arr[i])
    //     }
    // }
    
        // second method
        
        newarr = arr.filter(val=>val%2===0);
    
    console.log(newarr)
}

returneven(array1)