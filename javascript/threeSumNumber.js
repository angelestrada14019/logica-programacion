//a+b+c=target=0
let arr=[7, 12, 3, 1, 2, -6, 5, -8, 6]
function threeSumNumber(arr) {
    let target=0;
    arr.sort((a,b)=>a-b);
    let result=[];
   for (let i = 0; i < arr.length; i++) {
    let left =i+1;
    let right = arr.length-1;
    while (left<right) {
        if ((arr[i]+arr[left]+arr[right])===target) {
            result.push([arr[i],arr[left],arr[right]])
            left++;
            right--;
        }else if ((arr[i]+arr[left]+arr[right])<target) {
            left++;
        } else {
            right--;
        }
    }
    
   }
   return result
}

console.log(threeSumNumber(arr))