function divisibleSumPairs(n, k, ar) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    ar.slice(i + 1, n).filter((item) => {
      if ((item + ar[i]) % k === 0) {
        count++;
        console.log(ar[i],item);
      }
    });
  }

  return count;
}
let ar=[1, 3, 2, 6, 1, 2]
console.log(divisibleSumPairs(ar.length,3,ar));
