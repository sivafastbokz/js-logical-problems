// for (Initialization; Condition; Iteration) {
//     // Code to be executed in each iteration
//   }

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


// So, += is a shorthand way of saying 
// "add the right-hand operand to the left-hand operand and store the result in the left-hand operand."
//  In the case of strings, it means to concatenate two strings together.

// const str = 'ronaldo'
// const store = []
// for(let i = str.length-1;i>=0;i--){
//     store.push(str[i])
// }
// console.log(store)

// const userName = 'ajith kumar'
// const rev = userName.split('').reverse().join('')
// console.log(rev)
