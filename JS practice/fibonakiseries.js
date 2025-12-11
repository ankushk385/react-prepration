
const fibonakiseries = (n)=>{
    
    // program to generate fibonacci series up to n terms
  
  
  let n1 = 0, n2 = 1, nextTerm;
      
  let arr=[];
     
      
  for(let i =1;i<=n;i++){
      
      arr.push(n1)
      nextTerm = n1+n2
      n1=n2
      n2=nextTerm
  }
      
      console.log("this is my main array",arr)
  }
  
  fibonakiseries(10);