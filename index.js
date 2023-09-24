// Netscape developed JavaScript and was created by Brenden Eich in the year of 1995
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

const test = [1,2,3,4,5]
console.log(test.slice(0,-2))

function myArray(a){
       return a.slice(0,3)
}
console.log(myArray([1,2,3,4,5,6,7,8,9,10]))

const addNumbers = [1,2,3,4,5,6,7,8,9,10]
let totalSum = 0

for(let i =0; i<addNumbers.length;i++){
    // console.log(i)
    totalSum +=addNumbers[i]
}
console.log(totalSum)

let n =4
let star = ""

for(let i =0;i<n;i++){
    // console.log(i,'firstloop')
    for(let l = 0;l<n;l++){
        // console.log(l,'secondloop')
        star += "*"
    }
    star += "\n"
}
console.log(star)

function fetchData(dataproccess){
    console.log('data fetched from the server')
    dataproccess(displayTheData)
}

function dataProccess(displayData){
    console.log('the data is proccessing')
    displayData()
}

function displayTheData(){
    console.log('the data is displayed')
}


fetchData(dataProccess)

 const maxValue = [1,2,3,4,5]
// console.log(Math.max(...maxValue))
// console.log(Math.min(...maxValue))

function findMinMax(arr){
       let max = arr[0]
       let min = arr[0]
       for(const num of arr){
        // console.log(num)
        if(num > max){
            // console.log(max)
            max = num
        }
        if(num<min){
            min = num
        }
       }
       console.log(max)
       console.log(min)
}
findMinMax(maxValue)

function sumOfTwoNumbers(a,b){
        return a+b
}

console.log(sumOfTwoNumbers(3,5))

// function revString(str){
//      for(let i=str.length-1;i>=0;i--){
//           console.log(str[i])
//      }
// }
// revString('siva')

const numbers =[1,22,3,4,5,6,7,8,86,5,4,4,6,6]
const testResult =numbers.filter((even)=>even % 2 ==0)
console.log(testResult)


//upperCase
function stringUpperCase(str){
   return str.toUpperCase()
}
console.log(stringUpperCase('siva'))

//anagram
function isAnagram(str1,str2){
//  if(str1.length !==str2.length){
//     return false
//  }
 str1 = str1.split('').sort().join('')
 str2 = str2.split('').sort().join('')

 if(str1 === str2){
    return true
 }else{
    return false
 }
}

console.log(isAnagram('listen','silent'))
console.log(isAnagram('modi','monu'))
console.log(isAnagram('abcd','bcda'))

//removeduplicatesfromarray
 function removeDuplicates(arr){
         const newArray = new Set(arr)
         const resultArray = [...newArray]
         return resultArray
        
 }

 console.log(removeDuplicates([1,1,2,2,3,4,5,6,7,7,8,8]))

 function removeFalsy(arr){
    return arr.filter((value)=> Boolean(value))
 }
 console.log(removeFalsy([false, null, 0, '', undefined,NaN,1,2,3]))

//  function foo() {
//     let x = y = 0;
//     x++;
//     y++;
//     return x;
// }

// console.log(foo(), typeof x, typeof y);

function foo() {
    return {message:'Hello World'}
}
console.log(foo()); 



