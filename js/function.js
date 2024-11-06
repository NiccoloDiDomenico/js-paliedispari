// PALIDROMA

/**
 * Definisce se una parola è polindroma
 * @param {string} wordToCheck
 * @returns {boolean}
 */
function palidroma(wordToCheck) {
    let isPalidroma;
    let reverseWord = "";
    for (let i = wordToCheck.length - 1; i >= 0; i--) {
        const currentLetter = wordToCheck[i];
        console.log(currentLetter);
        reverseWord += currentLetter
    }
    console.log(reverseWord);
    if (wordToCheck === reverseWord) {
        isPalidroma = true
    } else {
        isPalidroma = false
    }
    return isPalidroma;
}


// PARI E DISPARI

/**
 * Genera un numero random per la cpu
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getCpuNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

/**
 * Definisco se la somma è pari o dispari
 * @param {number} numToCheck
 * @returns {string}
 */
function sumType(numToCheck) {
    let result;
    if (sum % 2 === 0) {
        result = "La somma è pari"
    } else {
        result = "La somma è dispari"
    }
    return result;
}