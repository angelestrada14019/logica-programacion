function minMaxSum(arr) {
    arr.sort((a,b)=>a-b);
    let n =arr.length
    let minValue=arr[0]+arr[1]+arr[2]+arr[3];
    let maxValue=arr[n-1]+arr[n-2]+arr[n-3]+arr[n-4]
    console.log(minValue,maxValue);
}
let arr=[1, 2, 3, 4, 5]
minMaxSum(arr)