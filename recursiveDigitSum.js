function recursiveDigitSum(n) {  
      if (n.length=== 1) {
          return n        
    }
    return recursiveDigitSum(sumDigit(n).toString())
}
function sumDigit(n) {
    return  n
      .split("")
      .map(Number)
      .reduce((a, b) => {
        return a + b;
      }, 0);
}
function superDigit(n,k) {
    return recursiveDigitSum((sumDigit(n)*k).toString())
}


let n="123"
let k=3;
console.log(superDigit(n,k));
//-----------------------------------------------lo de arriba funciona para hacker rank------------------------------
function recursiveDigitSum1(n,k) {
    let mul = n.repeat(k);
  let sum = 0;    
      if (mul.length > 1) {
        sum = mul
      .split("")
      .map(Number)
      .reduce((a, b) => {
        return a + b;
      }, 0);
        return recursiveDigitSum((sum).toString(),1)
      }
      return mul
}

function recursiveDigitSum2(n,k) {
    let recursiveN=sumNumbers(n)*k;
    if (recursiveN>9) {
        recursiveN=sumNumbers(recursiveN);
    }
    return recursiveN
   
    
}
function sumNumbers(n) {
    if (n.toString().length===1) {
        return n
    }
    let sum =0;
    for (const number of n.toString()) {
       sum+=parseInt(number)
    }
    return sumNumbers(sum)
}

function recursiveDigitSum3(n,k) {
    let mul = n * k;
  let sum = 0;
    sum = mul
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => {
        return a + b;
      }, 0);
      if (sum.toString().length > 1) {
        return recursiveDigitSum(sum,1)
      }

  return sum;
}