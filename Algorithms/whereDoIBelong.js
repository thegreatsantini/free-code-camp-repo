function getIndexToIns(arr, num) {
    arr.push(num)
    const sortedArr = arr.sort(function (a, b) { return a - b });
    return arr.indexOf(num)
}

// getIndexToIns([40, 60], 50);
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) // 3.
// getIndexToIns([10, 20, 30, 40, 50], 30) // 2.
// getIndexToIns([40, 60], 50) // 1.
//console.log(getIndexToIns([2, 5, 10], 15)) // 3
// getIndexToIns([5, 3, 20, 3], 5) // 2.