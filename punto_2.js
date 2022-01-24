/*
https://jsonplaceholder.typicode.com/users 

Mediante la anterior url, se debe acceder al endpoint /users 
para mostrar todos los usuarios, con el uso de la librería axios, 
se debe hacer 2 diseños de consumo de este recurso. 

1 consumirlo con promesas es decir con then(...).catch(...)
2 consumirlo con el formato de diseño async / await

docs:

https://github.com/axios/axios

npm install axios
*/

const axios = require('axios');
const log = console.log;

// Sync promises

function getUsers(){

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => log(response.data))
    .catch(error => log(error))
}
getUsers();

// Async

// async function getAsyncUsers(){

//     try{
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         log(response.data);

//     } catch(error){ 
//         log(error); 
//     }
// }
// getAsyncUsers();