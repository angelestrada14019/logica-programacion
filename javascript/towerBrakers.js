function towerBrakers(n,m) { //n=1 win 2, m=1 win 1,pares win 2, impares win 1
    if(m===1 || n%2===0){
        console.log(2);
        return 2;
    }else{
        console.log(1);
        return 1;
    }
}
let n =4; //number towers
let m=10; //height tower
//cuando el jugador actual no pueda hacer movimiento pierde el juego

towerBrakers(n,m)