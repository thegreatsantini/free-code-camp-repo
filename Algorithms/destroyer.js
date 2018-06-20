function destroyer(arr, ...nums) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if ( nums.indexOf(arr[i]) === -1 ) {
            console.log(nums.indexOf(arr[i]) === -1)
            newArr.push(arr[i])
        }
    }
    return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// REVIEW WITH 3.0