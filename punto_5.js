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

let countM = 0, countm = 0;
let nPersonas = personas.length;

// Method 1

let idx = 0;
let mayorArray = [], menorArray = [];

for(; idx < nPersonas; idx++){

    if(personas[idx].edad >= 18){
        mayorArray[idx] = personas[idx].nombre.toUpperCase();
        countM++;
        
    } else{
        menorArray[idx] = personas[idx].nombre.toUpperCase();
        countm++;
    }
}
let mayores = mayorArray.filter(Boolean); 
let menores = menorArray.filter(Boolean);
// Boolean is a constructor and function that returns true or false according to the value
// null, false, 0 and NaN are false (there is no value)

log(`
Personas mayores: ${mayores.join(', ')} (${countM})
Personas menores: ${menores.join(', ')} (${countm})
Total de personas: ${nPersonas}\n`);

// Method 2

// personas.map((persona) => {persona.edad >= 18 
//     ? countM++
//     : countm++
// });

// log(`
// Personas mayores: ${countM}
// Personas menores: ${countm}
// Total de personas: ${nPersonas}\n`);

// shorthand IF ELSE can also be stored in const variable to show after.