function newYearChaos(q) { //numero de personas que superan a una persona
    let minBribes=0;
    for (let i = q.length-1; i >= 0; i--) {
        if (q[i] - (i + 1) > 2) {
            return "Too chaotic"
        }
        for (let j = Math.max(0, q[i] - 2); j < i; j++){
            if (q[j] > q[i]) {
                minBribes++
            };
        }
    }
    return minBribes
}
let q=[1,2,3,4,5,6,7,8]
console.log(newYearChaos(q));