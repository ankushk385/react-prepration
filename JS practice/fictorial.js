const fictorial = (num)=>{

    if (num ==0){
console.log("fictorial is not possibel for this number")
    }
    else{
        let number=1;
        for (i=1;i<=num;i++){
            console.log(i)
            number = i*number
        }
        
        console.log(number)
    }
   
   
      
}

fictorial(0)