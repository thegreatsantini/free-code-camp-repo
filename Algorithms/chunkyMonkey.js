function chunkArrayInGroups(arr, size) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.length < size) {
            newArr.push(arr.splice(size, 0, ...arr))
            console.log('here',newArr)
        }
        else {
            for (let j = 0; j <= size; j++) {
                console.log('$$kkk', arr)
                newArr.push(arr.splice(j, 1))
                console.log('$$', arr)

            }
        }
    }
    // Break it up.
    return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));