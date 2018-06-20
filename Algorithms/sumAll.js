function sumAll(arr) {
    let sum = 0;
    let sortedArr = arr.sort( (a, b) => {
        return a - b
    })
    for ( let i = sortedArr[0]; i <= sortedArr[1]; i++ ) {
        sum += i
    }
    return sum;
}

sumAll([10, 5]);