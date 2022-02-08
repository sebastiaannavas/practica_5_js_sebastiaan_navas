/*
Este string "fooziman" se debe proyectar de la siguiente forma "fOozimAn" 
NOTA: con la segunda letra en upper y la ante  penúltima en upper.
*/

let str = "fooziman";

// Method 1
let strArray = [...str];
strArray[1] = strArray[1].toUpperCase();
strArray[6] = strArray[6].toUpperCase();

// Method 2
// let strArray = str.split('');
// strArray.splice(1, 1, 'O');
// strArray.splice(6, 1, 'A');

str = strArray.join('');

console.log(str);