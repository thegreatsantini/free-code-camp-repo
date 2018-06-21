function spinalCase(str) {
    let taped = str.replace(/(\s|_|[A-Z])/g, "-").toLowerCase();
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    return taped;
}

console.log(spinalCase('This Is Spinal Tap'));