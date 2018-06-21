function sumFibs(num) {
    let sum = 0;
    let x = 1;
    let y = 0;
    let z = 0;
    for (let i = x; i <= num; i++) {
        z = x + y;
        if ( z % 2 != 0 && z <= num) {
            sum += z
            console.log(z)
        }
        x = y;
        y = z;
    }
    return sum;
}

console.log(sumFibs(75025));

// REDO WITH WHILE LOOP