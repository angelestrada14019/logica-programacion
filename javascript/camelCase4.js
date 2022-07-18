function camelCase4(input) {
  let [sc, mcv, word] = input.split(";");
  if (sc === "S") {
    if (mcv === "M") {
      word = word
        .split("")
        .splice(0, word.length - 2)
        .join("");
    }
    word = word.replace(/(^\w{1})/g, (letra) => letra.toLowerCase());
    let aux = "";
    for (const iterator of word) {
      if (iterator === iterator.toUpperCase()) {
        aux += " " + iterator;
      } else {
        aux += iterator;
      }
    }
    return aux.toLowerCase().trim();
  }
  if (sc === "C") {
    if (mcv === "M") {
      word += "() ";
    }
    if (mcv === "C") {
      word = word.replace(/(^\w{1})/g, (letra) => letra.toUpperCase());
    }
    word = word.replace(/(\s+\w{1})/g, (letra) => letra.toUpperCase());

    word = word.split(" ").join("");
    return word.trim();
  }
}

//(S:division, C:combinacion);(M:metodo,C:clase,V:variable)
//S=>dividir en lista delimitada por espacios, comienza con minuscula
let otherI="S;V;iPad\nC;M;mouse pad\nC;C;code swarm\nS;C;OrangeHighlighter";
let otherI2="C;V;can of coke\nS;M;sweatTea()\nS;V;epsonPrinter\nC;M;santa claus\nC;C;mirror";
function print(input) {
    let aux=input.split('\n');
    let aux2=[];
    for (const iterator of aux) {
        aux2.push(camelCase4(iterator));      
    }
    let aux3=aux2.join("\n")
    console.log(aux3);
    return aux3;
}
print(otherI2)
