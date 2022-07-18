let r1=[-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854, -520, -470]
let r2=[4,4,2,1,3]
let r3=[2,5,8,10,15,18,21,30,33]
function closestNumbers(arr) {
    arr.sort((a,b)=>a-b);
    let minDiff=arr[1]-arr[0]
    let resultado=[]
    let actualDiff=0;
    for (let i = 0; i < arr.length; i++) { 
        actualDiff=arr[i+1]-arr[i];      
        if (actualDiff<minDiff) {
            resultado=[]
        }
        if (actualDiff<=minDiff) {
            resultado.push(arr[i])
            resultado.push(arr[i+1])
            minDiff=actualDiff
        }
    }
    console.log(resultado);
}
closestNumbers(r2)