/*
Hay 2 Objetos: Can y Perro (punto_3.js), que deben ser transformados en un esquema de clases,
donde la clase Perro herede las propiedades y funciones de la clase Can y mostrar
todo el perfil del Perro por pantalla / terminal.
*/

// Method 1

// class Can{

//     constructor(ladra, cantidadDePatas, correr, salta){
//         this.ladra = true;
//         this.cantidadDePatas = 4;
//         this.correr = function(){
//             return 'corriendo';
//         }
//         this.salta = function(){
//             return 'saltando';
//         }
//     }
// };

// class Perro extends Can{
//     constructor(ladra, cantidadDePatas, correr, salta, nombre){
//         super(ladra, cantidadDePatas, correr, salta);
//         this.nombre = 'tornado'
//     }
// }

// const perro = new Perro();


// Method 2

class Can{

    constructor(ladra, cantidadDePatas, correr, salta){
        this.ladra = ladra;
        this.cantidadDePatas = cantidadDePatas;
        this.correr = function(){
            return 'corriendo';
        }
        (); // call anonymous function. correr is not the nickname becasue it stores function(){}
        this.salta = function(){
            return 'saltando';
        }
        (); 
        // not called in the other constructor because it is anonymous and () is not accepted in arguments
    }
};

class Perro extends Can{
    constructor(ladra, cantidadDePatas, nombre){ 
        // order in which the arguments of this constructor and the other will be defined
        super(ladra, cantidadDePatas, nombre); // only the arguments to be defined from the other constructor
        this.nombre = nombre
    }
}

const perro = new Perro(true, 4, 'tornado');

console.log(perro);