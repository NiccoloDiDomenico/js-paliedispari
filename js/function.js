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
 * Definisco un numero random da 1 a 5 per la cpu
 * @param {number} numeroRandom
 * @returns {number}
 */
function numRandom(numeroRandom) {
    const cpuNum = Math.floor((Math.random() * 5) + 1);
    return cpuNum
}

/**
 * Definisco se la somma è pari o dispari
 * @param {number} number
 * @returns {string}
 */
function sumType(number) {
    let isEvenOrOdds;
    if (sum % 2 === 0) {
        isEvenOrOdds = true
    } else {
        isEvenOrOdds = false
    }
    return isEvenOrOdds
}