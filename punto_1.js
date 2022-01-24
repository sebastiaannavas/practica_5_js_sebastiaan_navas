/*
Se tiene creado un objeto, en el cual se desea agregar 2 propiedades
dentro de su prototipo, las propiedades son: edad: 300, pais:"narnia"
*/

let persona = {
    nombre: "foo",
    __proto__:{
        edad: 300,
        pais: 'narnia'
    }
};

// persona.__proto__ = {edad: 300, pais: 'narnia'};
// persona.__proto__.edad = 300;
// persona.__proto__.pais = 'narnia';

console.log(persona);
console.log(persona.__proto__);
console.log(persona.__proto__.edad);
console.log(persona.pais);