function breakingRecords(arr) {
    let minScore=arr[0];
    let maxScore=arr[0];
    let minValue=0;
    let maxValue=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>maxScore) {
            maxScore=arr[i]
            maxValue++
        }
        if(arr[i]<minScore){
            minScore=arr[i]
            minValue++
        }
    }
    console.log(minValue,maxValue);
}
let arr=[12,24,10,24]
breakingRecords(arr)