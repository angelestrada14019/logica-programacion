/*aserciones*/
// ^:comienzo
// $:final
// \b : busca una palabra tambien especifica fin de palabra, es decir git\b busca git pero no github
// x(=?\s): x es valida solo si tiene algo, en este caso un espacio
/*cuantificadores*/
// *: letra o caracter se repitan infinitas veces, indica que algo puede o no venir
// +: letra o caracter se repitan infinitas veces, indica que algo al menos este una vez
// ?: letra puede  o no venir, pero solo una vez
// {1,2}$: especificar numero de veces que puede repetir, tambien {2,} tiene que venir 2 o mas veces
/*cuantificado codicioso*/
// g: globalmente
// i: sensitivo entre mayuscula y minuscula
// u: evalua unicode o emoticones
/*Clases de caracteres*/
// . : dentro puede estar lo que sea
// \d : debe ser un digito [0-9]=\d
// \D : que no tenga numeros
// \w : caracter alfanumerico [A-Za-z0-9_]
// [a-zA-Z] alfabetico
// \s: espacios
/*Grupos y Rangos*/
// |: or
// []: rangos [a-g] => de la a a la g, [0-2]=> del 0 al 2
// [^x]: niega algo [^a-zA-Z] niega todo de la a a la z mayuscual o minuscula

let text="   ";
//console.log(/^a/.test(text) ); //ab => true ba=>false // ^a:comienzo letra a
//console.log(/b$/.test(text)); //ab => true ba=>false // b$:final letra b
//console.log(/^b$/.test(text)); //bab => true aba=>false // comienza con b y termina con b
//console.log(/git\b/.test(text)); //busca git en text
//console.log(/o*$/.test(text)); //busca las ocurrencias de o, que pueda  o no venir y que termine en o
//console.log(/o+/.test(text)); //busca las ocurrencias de o y que al menos este una vez
//console.log(/pato1?/.test(text)); //letra s puede o no venir
// console.log(/pato1{1,2}$/.test(text)); //caracter puede venir 1 o 2 veces pero no 0 o mas se 2
// console.log(/pato1{2,}A$/.test(text)); //2 o mas veces, tiene que estar la A al final
//console.log(/^<beer>.*<\/beer>$/.test(text)); //busca esa etiqueta comienza por < y termina > y dentro venga  cualquier cosa y sea infinito
//console.log(text.match(/<beer>.*?<\/beer>/g)); //busca esa etiqueta y dentro venga  cualquier cosa y sea infinito solo lo hace para el primer patron, devuelve el array, globalmente
//console.log(/^\d+$/.test(text)); //comience con un digito y termine con un digito hasta infinito
//console.log(/^\w+$/.test(text)); //alfanumerico y que tnga un _
//console.log(/^\s+$/.test(text)); //que este lleno de espacios
//console.log(/^cerveza|vino$/.test(text)); //busca cerveza o vino
//console.log(/^(\w|\s)+$/.test(text)); //debe comenzar con letra o con espacio, puede terminar con letra o con espacio y acepta muchas
//console.log(text.match(/Vino(=?\s\w+)/gi)); //trae un array de palabras que tengan Vino siempre y cuando sea seguido de un espacio y un caracter infinito, de forma global no importa minus y mayus
//console.log(/Java\s(?!\w)/.test(text)); //busca Java seguida de espacio, pero no tenga caracteres alfanumericos y _
console.log(/^[\w+\s]+$/.test(text)); //(debe coincidir con una palabra o caracter o coicidir con un espacio) esto muchas veces y terminar ya sea en caracter o espacio