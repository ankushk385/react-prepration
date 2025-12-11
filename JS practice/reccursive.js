function factorial(num){
    if(num<=1) return 1;
    console.log(num)
return num * factorial(num-1)
    
}

const a = factorial(5)

console.log(a)