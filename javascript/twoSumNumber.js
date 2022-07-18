//a+b=target=9
let arr=[1, 3, 2, 6, 1, 2]
function twoSumNumber(arr) {
    let target=3;
    arr.sort((a,b)=>a-b);
    let result=[];
    let left =0;
    let right = arr.length-1;
    while (left<right) {
        if ((arr[left]+arr[right])===target) {
            result.push([arr[left],arr[right]])
            left++;
            right--;
        }else if ((arr[left]+arr[right])<target) {
            left++;
        } else {
            right--;
        }    
   }
   return result
}

console.log(twoSumNumber(arr))