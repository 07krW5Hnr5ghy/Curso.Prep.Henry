// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matrix = Object.keys(objeto).map((key) => [key, objeto[key]]);
  return matrix;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let characters = string.split(' ').join('');
  let chrarray = characters.split('');
  let count = {};
  chrarray.forEach(letter => {
    count[letter] = (count[letter] || 0) + 1;
  });

  return count;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let letters = s.split('');
  let upperCase = [];
  let lowerCase = [];
  letters.forEach(letter => {
    if(letter == letter.toUpperCase()){
      upperCase.push(letter);
    }else{
      lowerCase.push(letter);
    }
  }); 
  let capToFrontArray = upperCase.concat(lowerCase);
  let capToFrontString = capToFrontArray.join("");
  return capToFrontString;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arr = str.split(" ");
  let reverseArr = [];
  for(let word in arr){
    let splitWord = arr[word].split("").reverse().join("");
    reverseArr.push(splitWord);
    reverseArr.push(" ");
  }
  reverseArr.pop();
  let reverseSentence = reverseArr.join("");
  return reverseSentence;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numStr = numero.toString();
  let numReverseArr = numStr.split("").reverse();
  let numReverse = numReverseArr.join("");
  if(numStr == numReverse){
    return "Es capicua";
  }else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let arrStr = cadena.split("");
  for(let letter in arrStr){
    if(arrStr[letter] == "a" || arrStr[letter] == "b" || arrStr[letter] == "c"){
      arrStr[letter] = " ";
    }
  }

  let arrStrNonWhiteSpace = arrStr.filter(e => String(e).trim());
  let endCadena = arrStrNonWhiteSpace.join("");
  return endCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort((a,b) => a.length - b.length);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  let common = []; 
  for(let number1 in arreglo1){
    for(let number2 in arreglo2){
      if(arreglo1[number1] == arreglo2[number2]){
        common.push(arreglo1[number1]);
      }
    }
  }

  let intersection = [...new Set(common)];
  return intersection;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

