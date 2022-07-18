let arrayArgument=["MArtin","martin","AnGel","Jose","angel","Maria","MaRia","ANtonio","aNtonio","Pedro","Mongo","mongo"];
function consultPrefix(prefix,argument) {
    if (prefix===argument) {
        return false
    }
   return  (argument.toLowerCase()).includes(prefix.toLowerCase());
}
function consultPrefixArray(prefixArray,argument) {
    let aux =[]
    for (const iterator of prefixArray) {
        aux.push(consultPrefix(iterator,argument));
    }
    return aux;
}

function print(arrayArgument,prefix) {
    let acum=0;
    for (const iterator of arrayArgument) {
      acum+=consultPrefix(prefix,iterator)?1:0;
    }
    return acum
}
function printTotal(arrayArgument,prefixArray) {    
    let acumArray=[];
   for (const iterator of prefixArray) {
    acumArray.push(print(arrayArgument,iterator));
   }
   return acumArray;
}

console.log(printTotal(arrayArgument,["mar","mart","mong","pe"]));

module.exports ={
    consultPrefix,
    print,
    consultPrefixArray,
    printTotal
}