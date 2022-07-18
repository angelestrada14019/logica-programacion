function longestIncreasingSubsequence(arr) {
    if(arr===null || arr.length===0){
        return;
    }
    let list =[];
    for (let i = 0; i < arr.length; i++) {
        list.push([]);        
    }
    list[0].push(arr[0]);
    console.log(list);
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if ((arr[j]<arr[i])&& (list[j].length > list[i].length)) {
                list[i]=[...list[j]];
            }
            
        }
        list[i].push(arr[i])        
    }
    let j=0;
    for (let i = 0; i < arr.length; i++) {
        if (list[j].length<list[i].length) {
            j=i;
        }
        
    }
    return list[j]
}


let arr=[9, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];

console.log(longestIncreasingSubsequence(arr));
