function palindrome(str) {
    const lettersOnly = str.replace(/[' '\_\W]/g, '').toLowerCase()
    for ( let i = 0; i < Math.floor(lettersOnly.length); i++ ) {
        if ( lettersOnly[i] !== lettersOnly[lettersOnly.length - i - 1] ) {
            return false
        }
    }
    return true;
}



console.log(palindrome("A man, a plan, a canal. Panama"));