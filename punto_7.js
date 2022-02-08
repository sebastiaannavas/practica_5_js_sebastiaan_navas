/*
Se tiene una Wallet / Billetera virtual, a la que hay que agregarle en la
propiedad criptos del objeto Wallet, 3 critpomonedas, además se tiene que
conocer el total de stableCoin y el total de no stableCoin, si la propiedad 
stableCoin=true indica que es una stableCoin, por último indicar, cuál de 
las 3 criptos tiene mayor reserva de dinero tomando como referencia la 
propiedad del valor con dolar.
*/

const log = console.log;
log(' ');

const Wallet = {
    criptos: [],
    status: true,
    user: ""
};

let BTC = {
    name: "bitcoin",
    usd: "100",
    btc: "0,0023",
    current: "$42,750.52",
    stableCoin: false
};

let ETH = {
    name: "ethereum",
    usd: "1000",
    eth: "0,31",
    current: "$3,199.91",
    stableCoin: false
};

let USDT = {
    name: "tether",
    usd: "500",
    usdt: "500",
    current: "$1.00",
    stableCoin: true
};

Wallet.criptos[0] = BTC;
Wallet.criptos[1] = ETH;
Wallet.criptos[2] = USDT;

let criptoLen = Wallet.criptos.length;
let max = 0, countStable = 0, countNoStable = 0;
let maxCripto;

let idx = 0;
for(; idx < criptoLen; idx++){

    if(Wallet.criptos[idx].stableCoin == true){
        log(`${Wallet.criptos[idx].name.toUpperCase()} es una stableCoin`);
        countStable++;

    } else{
        log(`${Wallet.criptos[idx].name.toUpperCase()} no es una stableCoin`);
        countNoStable++;
    }
}

let i = 0;
for(; i < criptoLen; i++){

    if(+Wallet.criptos[i].usd > max){   
        // unary plus evaluates its operand and converts it into a number to do so.
        max = +Wallet.criptos[i].usd;
        maxCripto = Wallet.criptos[i].name;
    }
}

log(`
Total de stableCoin: ${countStable}
Total de no stableCoin: ${countNoStable}
Cripto de mayor reserva: ${maxCripto.toUpperCase()}
`);

// Method 2 

// Get stable and noStableCoin

// function totalStable() {
//     let stable = criptos.filter(coin => coin.stableCoin == true);
//     return stable.length;
// }
// function totalNoStable() {
//     let noStable = criptos.filter(coin => coin.stableCoin == false);
//     return noStable.length;
// }

// For max numbers
// let max = Math.max.apply(null, +Wallet.criptos[i].usd);

// Math.max only accepts numbers separated by , (5, 6, 7)
// apply() calls a function with this || null || undefined on its first parameter
// to assign each value in an array-like-object specified on its second parameter and return it

// or simply copy one by one with ...

// let array = [3, 1, 5, 0, 9];
// let max = Math.max(...array);
// log(max);


// Method 3 --> Memorization (?)