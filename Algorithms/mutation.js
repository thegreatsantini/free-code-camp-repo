function mutation(arr) {
    const str1 = arr[0].toLowerCase().split('');
    const str2 = arr[1].toLowerCase().split('');
    for ( let i = 0; i < str2.length; i++ ) {
        if ( str1.indexOf(str2[i]) === -1) {
            return false;
        }
    }
    return true;
}

// console.log(mutation(["hello", "hey"]));
// console.log(mutation(["hello", "Hello"]));
// console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
// console.log(mutation(["Mary", "Army"]));
// console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
// console.log(mutation(["voodoo", "no"]));