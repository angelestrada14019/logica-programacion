class WordAnalizer {
    constructor(word) {
      this.word = word;
      this.vowels = "aeiouá é í ó ú ü ã õ à";     
          
          this.validateWord(word);
     
    }
    validateWord(word) {
      let simbolsRegex = new RegExp(`[,.:;?¿!¡'"]`, "gi");
      let spacesRegex = new RegExp(`[ ]`, "gi");
      let numberRegex = new RegExp(`[0-9]`, "gi");
      if (word.length === 0) {
        throw new Error ("A word is required");
      } else if (word.match(spacesRegex)) {
        throw new Error ("Too many words");
      }else if (word.match(numberRegex)) {
        throw new Error ("A word cannot contain numbers");
      } else if (word.match(simbolsRegex)) {
        throw new Error ("A word cannot contain punctuation marks");
      } 
    }
    countVowels() {
      let vowelRegex = new RegExp(`[${this.vowels}]`, "gi"); 
      return this.word.match(vowelRegex).length;
    }
    countConsonants() {
      let consonantRegex = new RegExp(`(?![${this.vowels}])[a-z]`, "gi");
      return this.word.match(consonantRegex).length;
    }
    countCharacters() {
      return {
        vowels: this.countVowels(),
        consonants: this.countConsonants(),
        total: this.countVowels() + this.countConsonants()
      }
    }
  }
   try {
    
       const test = new WordAnalizer("Serendipity5");
       console.log(test.countVowels());
       console.log(test.countConsonants());
       console.log(test.countCharacters());
   } catch (error) {
    console.log(error.message);
   }