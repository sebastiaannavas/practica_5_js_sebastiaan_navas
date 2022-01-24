/*
Este string "fooziman" se debe proyectar de la siguiente forma "fOozimAn" 
NOTA: con la segunda letra en upper y la ante  penúltima en upper.
*/

let str = "fooziman";
let strArray = [...str];

strArray[1] = strArray[1].toUpperCase();
strArray[6] = strArray[6].toUpperCase();

let strPatch = strArray.join('');

console.log(strPatch);