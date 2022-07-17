function mockTest1FindMedian(arr) {
    // Write your code here    
  arr.sort((a, b) => a - b);
  let median = Math.floor(arr.length / 2);
  let aux= arr.length % 2 ?arr[median]:(arr[median-1]+arr[median])/2.0
 
  return aux
}

let arr= [1,2,3,4,5,6,7,8,6,5]
mockTest1FindMedian(arr)