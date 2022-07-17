function numberPositives(number) {
    return number>0
}
function numberNegatives(number) {
    return number<0
}
function numberZeros(number) {
    return number===0
}
function lengthBetween(n) {
    return n>0 && n<=100
}
function numberBetween(n) {
    return n>=-100 && n<=100
}
function ratios(arr) {
    let positive = arr.filter(number => number > 0).length / arr.length;
    let negative = arr.filter(number => number < 0).length / arr.length;;
    let zeronums = arr.filter(number => number == 0).length / arr.length;;
    return (positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeronums.toFixed(6))

}

module.exports={
    numberPositives,
    numberZeros,
    numberNegatives,
    lengthBetween,
    numberBetween,
    ratios
}