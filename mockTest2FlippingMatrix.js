function mockTest2FlippingMatrix(arr) {
    let acum=0;
    let n = parseInt(arr.length/2) // maximun to 2nX2n if 2X2 maximun sum 1x1, if 4X4 maximun sum to 2X2
    for (let i = 0; i < n; i++) {      
        for (let j = 0; j < n; j++) {
           acum+=Math.max(Math.max(arr[i][j],arr[i][2*n-j-1]),Math.max(arr[2*n-i-1][j],arr[2*n-i-1][2*n-j-1]))            
        }
    }
    console.log(acum);
    return acum;
}
let arr=[[1,2],[3,4]]
console.log(mockTest2FlippingMatrix(arr));