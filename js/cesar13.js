function cesar13(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpperCase = alphabet.toUpperCase();
    let movementNumber = 13;


    if (!isNaN(text)) return "The phrase must be text and contain at least one letter";

    console.log(typeof text)

    text = [...text];

    let outputText = [];

    outputText = text.map(el => {

        if (el === " " || /\d/.test(el) || /\p{P}/u.test(el)) return el;

        if (/[A-Z]/.test(el)) {
            const index = alphabetUpperCase.indexOf(el);
            const movementIndex = (index + movementNumber) % alphabet.length;
            return alphabetUpperCase[movementIndex];
        } else {
            const index = alphabet.indexOf(el);
            const newIndex = (index + movementNumber) % alphabet.length;
            return alphabet[newIndex]
        }


    })
    return outputText.join("");
}



export default cesar13;