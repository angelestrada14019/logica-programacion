function diagonalDifference(arr) {
    let acumR=0;
    let acumL=0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(i===j){
                acumR+=arr[i][j]
            }
            if(i+j===arr.length-1){
                acumL+=arr[i][j]
            } 
        
        }
        
    }
   
    console.log(Math.abs(acumL-acumR));
    return Math.abs(acumL-acumR)
}
let arr=[[1,2,3],[4,5,6],[9,8,9]]
diagonalDifference(arr)