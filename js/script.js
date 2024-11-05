// PALIDROMA

// DATI
// - userWord

// ESECUZIONE LOGICA
// - Chiedere una parola all'utente attraverso un "prompt";
// - Creare una "function" che definisce se una parola è palindroma;

// OUTPUT
// - Stamapare il risultato attravero un'istruzione condizionale;

const userWord = prompt("Scrivi una parola e ti dirò se è polindroma")
let isPalidroma = palidroma(userWord)
console.log(isPalidroma);


if (isPalidroma) {
    console.log("La tua parola è palidroma");
} else {
    console.log("La tua parola non è palidroma");
}