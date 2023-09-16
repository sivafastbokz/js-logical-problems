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

// for(let i = 0; i<=10;i++){
//     console.log(i)
// }

const num = [1,3,42,4,5,6,88,77,22,34,55,78,2]
const evenNumber = num.filter((even)=> even % 2 == 0)
console.log(evenNumber)

//even numbers
for(let i =0;i<=10;i+=2){
  console.log(i)
}

function array(a){ 
 return a.length;
}
console.log(array([1,2,3,4,5]))

function object(obj){
    if('country' in obj){
        return obj.country
    }else{
        return 'country not found'
    }
}
console.log(object({ continent: 'Asia', country: 'Japan' }))

const userDetails ={
    userName:'bob',
    age:'23',
    country:'england'
}

function finddetails(){
    if('userName' in userDetails){
        return userDetails.userName
    }else{
        return 'user not found'
    }
}

console.log(finddetails())