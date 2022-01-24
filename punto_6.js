/*
Hay 2 Objetos: Can y Perro (punto_3.js), que deben ser transformados en un esquema de clases,
donde la clase Perro herede las propiedades y funciones de la clase Can y mostrar
todo el perfil del Perro por pantalla / terminal.
*/

class Can{

    constructor(ladra, cantidadDePatas, correr, salta){
        this.ladra = true;
        this.cantidadDePatas = 4;
        this.correr = function(){
            return 'corriendo';
        }
        this.salta = function(){
            return 'saltando';
        }
    }
};

class Perro extends Can{
    constructor(ladra, cantidadDePatas, correr, salta, nombre){
        super(ladra, cantidadDePatas, correr, salta);
        this.nombre = 'tornado'
    }
}

const perro = new Perro();

console.log(perro);