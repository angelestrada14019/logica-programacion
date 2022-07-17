function lonelyInteger(a) {
    let unique = a.filter((value,i,a)=>a.indexOf(value)===a.lastIndexOf(value))
    console.log(unique);
}
a=[1,2,3,4,3,2,1,6,4]
lonelyInteger(a)