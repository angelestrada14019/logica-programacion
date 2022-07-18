function findMedian(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  let half = Math.floor(arr.length / 2);
  if (arr.length % 2) {
    return arr[half];
  }
  return (arr[half - 1] + arr[half]) / 2.0;
}
let arr= [1,2,3,4,5,6,7,8,6,5]
console.log(findMedian(arr));