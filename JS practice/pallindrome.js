
let str1 = 'aaaaaasa';

const pallindromefun = (str)=>
{
let convertstr = str.split('').reverse().join('')

if(str===convertstr){
    console.log('string is a pallindrome')
}else{
     console.log('string is not a pallindrome')
}
    
}

pallindromefun(str1)