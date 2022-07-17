function removeDuplicates(arr) {
    let numberMaxDuplicate=1;
    arr.sort((a,b)=>a-b);
    let j=0;
    for (let i = 0; i < arr.length; i++) {
        if ((i<(arr.length-numberMaxDuplicate))&& (arr[i]===arr[i+numberMaxDuplicate])) {
            continue;
        }
        arr[j]=arr[i];
        j++;
    }

    return j;
}
function print() {
    let arr =[1, 1, 1, 3, 5, 5, 7,4,5,4,3,1,8,7,7,8];
    let newLength=removeDuplicates(arr);
    let newArray=[]
    for (let i = 0; i < newLength; i++) {        
        newArray.push(arr[i])
    }
    return newArray;
}

console.log(print());