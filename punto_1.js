/*
Se tiene creado un objeto, en el cual se desea agregar 2 propiedades
dentro de su prototipo, las propiedades son: edad: 300, pais:"narnia"
*/

let persona = {
    nombre: "foo",
    // Method 1
    __proto__:{
        edad: 300,
        pais: 'narnia'
    }
};

// Method 2
// persona.__proto__ = {edad: 300, pais: 'narnia'};

// Method 3
// persona.__proto__.edad = 300;
// persona.__proto__.pais = 'narnia';

// Method 4
// persona.__proto__['edad'] = 300;
// persona.__proto__['pais'] = 'narnia';

console.log(persona);
console.log(persona.__proto__);
console.log(persona.__proto__.edad);
console.log(persona.pais);

// If console.log(persona.__proto__) in Method 3 or 4 (single assignment),
// result = Object: null prototype + content of the object
// because the prototype is never defined, just the properties (content).