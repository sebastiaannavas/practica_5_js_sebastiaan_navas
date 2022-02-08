/*
Se tiene el objeto "Can" y el objeto "Perro" en el objeto "Perro"
 se debe crear un vínculo con un prototipo hacia el objeto "Can" 
 para mostrar todas sus propiedades y funciones.
*/

let Can = {
    ladra: true,
    cantidadDePatas: 4,
    __proto__: {
        correr() {
            return "corriendo";
        },
        salta() {
            return "saltando"
        }
    }
};

let Perro = {
   nombre:"tornado",
   __proto__: Can
}; 

// Perro.__proto__ = Can;

console.log(Perro);
console.log(Perro.__proto__);
console.log(Perro.__proto__.__proto__);

console.log(`\nNombre del perro: ${Perro.nombre.toUpperCase()}`);

let keysPerroProto1 = Object.keys(Perro.__proto__);
console.log(`\nPropiedades del perro:
${keysPerroProto1[0]}: ${Perro.__proto__.ladra}
${keysPerroProto1[1]}: ${Perro.cantidadDePatas}`
);

console.log(`\nFunciones del perro: 
${Perro.__proto__.__proto__.correr()}...
${Perro.salta()}...`
);