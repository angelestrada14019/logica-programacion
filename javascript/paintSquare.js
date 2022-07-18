function paintSquare(number) {
  let lado = "";
  for (let i = 0; i < number; i++) {   
    for (let j = 0; j < number; j++) {
        lado+=((i===0)||(i!==0 && j===0)||(i===number-1)||(j===number-1) )?"*":" ";        
    }  
    lado+="\n";
  }
  return lado;
}
console.log(paintSquare(5));;
