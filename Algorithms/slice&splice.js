function frankenSplice(arr1, arr2, n) {
    let newArr1 =arr2.slice()
    newArr1.splice(n, 0, ...arr1)
    return newArr1
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));