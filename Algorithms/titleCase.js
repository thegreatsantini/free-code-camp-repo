function titleCase(str) {
    const toArr = str.toLowerCase().split(' ');
    let toUpper = toArr.map(item => {
        return item.charAt(0).toUpperCase() + item.substring(1)
    })
    return toUpper.join(' ');
}

console.log(titleCase("I'm a little tea pot"));