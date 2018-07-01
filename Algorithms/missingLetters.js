function fearNotLetter(str) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const start = alphabet.indexOf(str[0]);
    let indexStr =  0;
    for ( let i = start; i < str.length + start; i++ ) {
        console.log(alphabet[i], str[indexStr])
        if ( str[indexStr] != alphabet[i] ) {
            console.log(alphabet[i], str[indexStr])
            return alphabet[i]
        }
        console.log(alphabet[i], str[indexStr])
        indexStr++
    }
    return undefined;
}

console.log(fearNotLetter("stvwx"));