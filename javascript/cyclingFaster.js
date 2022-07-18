function cyclingFaster(lapDistanceInKm,avgSpeedByLap) {
    avgSpeedByLap.sort((a,b)=>b-a);
    console.log(avgSpeedByLap);
    let acumDistance=0;
    let acumAvg=0;
    let index =0;
    for (let i = 0; i < avgSpeedByLap.length; i++) {
        acumDistance+=lapDistanceInKm;
        if (acumDistance<=40) {
            acumAvg+=avgSpeedByLap[i];
            index++;
        }
    }
    if (acumDistance<=38.90) {
        throw "The minimum distance was not reached in this session"
    }
    return acumAvg/index;
}
let lapDistanceInKm=10;
let avgSpeedByLap=[5.7,"",9.1,6.3,2.4,4.4]
console.log(cyclingFaster(lapDistanceInKm,avgSpeedByLap));