function caesarCipher(s, k) {
  let result = "";
  for (const i in s) {
    let letter = s[i];
    if ((/^[a-zA-Z]/.test(letter))) {
      result +=
        letter === letter.toUpperCase()
          ? String.fromCharCode(((letter.charCodeAt(0) + k - 65) % 26) + 65)
          : String.fromCharCode(((letter.charCodeAt(0) + k - 97) % 26) + 97);
    } else {
      result += letter;
    }
  }

  console.log(result);
  return result;
}
let s = "mi-ddle-Outz";
let k = 2;
caesarCipher(s, k);
