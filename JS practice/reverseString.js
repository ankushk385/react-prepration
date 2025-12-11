let str1 = 'Ankush is bad'

const reverseString = (n)=>{
    let newStr = n.split('').reverse().join('')
    
    console.log(newStr)
    
}

reverseString(str1)