
let array = [12,4,6,57,90,22]


const bubbleSort = (n)=>{
    
    let i;
    let j ;
    let temp;
    
    for (i=0;i<=n.length-1;i++){
        
        // console.log("this is i ",n[i])
        
        for (j=0 ; j<=n.length-1-i;j++){
            
            // console.log("this is j",n[j])
            
            if(n[j]>n[j+1]){
               
            temp = n[j];
               n[j] = n[j+1];
               n[j+1]= temp;
                
                
            }
            
        }
    }
    
    console.log(n)
    
}

bubbleSort(array)