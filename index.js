function palindrome(str){
    let string = ''
    for(let i =str.length-1;i>=0;i--){
          string+=str[i]
    }
    if(string==str){
        return true
    }else{
        return false
    }
}
console.log(palindrome('mam'))

function isPalindrome(str){
         var string = str.split('').reverse().join('');
         if(string==str){
            return true
         }else{
            return false
         }
}

console.log(isPalindrome('mam'))