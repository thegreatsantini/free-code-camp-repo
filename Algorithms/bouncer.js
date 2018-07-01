function bouncer(arr) {
    let onlyTruthies = arr.filter(item => {
        return item
    })
    // Don't show a false ID to this bouncer.
    return onlyTruthies;
}

console.log(bouncer([7, "ate", "", false, 9]));