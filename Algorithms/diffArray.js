function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.forEach(element => {
        console.log(arr2.indexOf(element))
        if ( arr2.indexOf(element) === -1 ) {
            newArr.push(element)
        }
    });

    arr2.forEach(element => {
        if ( arr1.indexOf(element) === -1 ) {
            newArr.push(element)
        }
    })
    // Same, same; but different.
    return newArr;
}

console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));