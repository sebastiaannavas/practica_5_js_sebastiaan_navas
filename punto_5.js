/*
Determinar con un loop/ciclo en el array de personas cuantas 
son mayores de edad y cuantas menores de edad, adicional decir 
el total de personas que compone el array.
*/

const log = console.log;

let personas = [{
        nombre: "foo",
        edad: 18
    },
    {
        nombre: "bar",
        edad: 17
    },
    {
        nombre: "zap",
        edad: 40
    },
    {
        nombre: "qux",
        edad: 19
    }
];

// let idx = 0;
// let nPersonas = personas.length;

// for(; idx < nPersonas; idx++){

//     if(personas[idx].edad >= 18){
//         log(`\n${personas[idx].nombre.toUpperCase()} es mayor de edad`);
        
//     } else{
//         log(`\n${personas[idx].nombre.toUpperCase()} es menor de edad`);
//     }
// }
// log(`\nTotal de personas: ${nPersonas}\n`);

// Method 2

personas.map((persona) => {persona.edad >= 18 
    ? log(`\n${persona.nombre.toUpperCase()} es mayor de edad`)
    : log(`\n${persona.nombre.toUpperCase()} es menor de edad`)
});

let nPersonas = personas.length;
log(`\nTotal de personas: ${nPersonas}\n`);
// shorthand IF ELSE can also be stored in const variable to show after.