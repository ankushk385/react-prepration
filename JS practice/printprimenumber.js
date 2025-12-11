
const primeNumber = (n)=>
    {
      let res = true;
      let i;
      if(n<=1){
          res = false;
      }
      for (i=2;i<n;i++){
          
          if(n%i===0){
              res = false;
          }
      }
      if(res){
         return true;
      }else{
           return false;
      }
    }
    
    const PrintPrimeNumbers = (number)=>{
        
        let array = [1];
        let j;
        
        for (j=2;j<number;j++){
            
          if (primeNumber(j)){
              array.push(j)
          }
        }
        
        console.log(array)
    }
    
    PrintPrimeNumbers(100)
    