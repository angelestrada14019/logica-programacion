function mockTest3PalindromeIndex(s) {   
    let palIndex=-1;
    let len = s.length;
    for (let i = 0; i < parseInt(len/2); i++) {
        if (s[i] !== s[len-i-1]) {
            if(i+1 < len){
                if(validPal(s.substring(i+1,len-i))){
                    console.log(i);
                    return i;
                }
                console.log(len-i-1);
                return len-i-1
            }
        }
    }
    return palIndex;
    
}

function validPal(str) {
    let len = str.length;
    for (let i = 0; i < parseInt(len/2); i++) {
        if (str[i] !== str[len-i-1]) {
            return false
        }
        
    }
    return true
}
let s="bbcb"
console.log(mockTest3(s));