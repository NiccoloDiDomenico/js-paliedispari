// PALIDORMA

const userWord = prompt("Scrivi una parola e ti dirò se è polindroma")
let isPalidroma = palidroma(userWord)
console.log(isPalidroma);


if (isPalidroma) {
    console.log("La tua parola è palidroma");
} else {
    console.log("La tua parola non è palidroma");
}


// PARI E DISPARI

// Giocatore sceglie il tipo di numero
const userChoise = prompt("Inscerisci: pari o dispari?")
console.log(`Giocatore sceglie ${userChoise}`);

// Giocatore sceglie un num da 1 a 5
const userNum = parseInt(prompt("Inserisci un numero da 1 a 5"))
console.log(`Il tuo numero è ${userNum}`);

// Numero del computer
const cpuNum = numRandom()
console.log(`Il numero del computer è ${cpuNum}`);

// Somma
const sum = userNum + cpuNum
console.log(`La somma dei due numeri è ${sum}`);

// Tipo
let isEvenOrOdds;
if (sumType === true) {
    isEvenOrOdds = "pari"
    console.log("La somma è pari");

} else {
    isEvenOrOdds = "dispari"
    console.log("La somma è dispari");
}

// Output
let winner
if (userChoise === isEvenOrOdds) {
    winner = "Pari vince"
} else {
    winner = "Dispari vince"
}
console.log(winner);
