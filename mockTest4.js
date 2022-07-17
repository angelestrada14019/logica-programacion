function mockTest4(petrolpumps) {
    let petrol=0;
    let fisrt =0;
    let i=fisrt;
    while (i<petrolpumps.length) {
        petrol+=petrolpumps[i][0]-petrolpumps[i][1]
        if (petrol<0) {
            fisrt++;
            i=fisrt;
            petrol=0;
        }else{
            i++
        }
    }
    return fisrt
}
let petrolpumps=[ [ 7, 5 ], [ 6, 8 ], [ 7, 4 ] ]
console.log(mockTest4(petrolpumps));