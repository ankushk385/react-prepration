
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
         console.log("this number is prime number") 
      }else{
           console.log("this number is not a prime number")
      }
        
    }
    
    primeNumber(4)