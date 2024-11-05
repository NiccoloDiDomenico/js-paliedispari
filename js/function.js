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