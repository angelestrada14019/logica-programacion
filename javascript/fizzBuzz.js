// function fizzBuzz(number) {
//     if (number%15===0) {
//         return "FizzBuzz"
//     }
//     if (number%3===0) {
//         return "Fizz";
//     }
//     if (number%5==0) {
//         return "Buzz"
//     }
//     return number;
// }
function fizzBuzz(number) {
    if (typeof number !=='number') {
        return 'Error: the argument must be a number';
    }
    return (number%3?"":"Fizz")+(number%5?"":"Buzz")||number;
}
function print(number) {
    for (let i = 1; i <= number; i++) {
        console.log(`${i}: ${fizzBuzz(i)}`);
    }
}
//print(100)
module.exports = fizzBuzz;