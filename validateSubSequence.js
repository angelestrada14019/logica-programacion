let firstS=[5,8,30,10,15,-1,4,20]
let secondS=[8,30,4,20,10]
function validateSubSequence(firstS,secondS) {
    let indexFirst=0;
    let indexSecond=0;
    while ((indexFirst<firstS.length)&&(indexSecond<secondS.length)) {
        if (firstS[indexFirst]===secondS[indexSecond]) {
            indexSecond++;
        }
        indexFirst++;
    }
    return indexSecond===secondS.length
}
console.log( validateSubSequence(firstS,secondS))