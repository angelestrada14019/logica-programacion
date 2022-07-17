function sparseArrays(strings, queries) {
    // Write your code here
    let aux=[]
    queries.forEach((query) => {
    const times = strings.reduce(
      (acc, string) => (query === string ? ++acc : acc),
      0
    );
    aux.push(times)
    console.log(times);
  });
  return aux;
}
let s=["aba","baba","aba","xzxb"]
let q=["aba","xzxb","ab"]
sparseArrays(s,q)