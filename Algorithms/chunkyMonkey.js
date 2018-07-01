function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (var i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));