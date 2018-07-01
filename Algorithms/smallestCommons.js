function smallestCommons(arr) {
    let mult = 1;
    while ( true ) {
        
        let checker = arr[0] * mult;
        if ( checker % arr[1] === 0 ) {
            return checker
        }
        mult++
    }
}


console.log(smallestCommons([23, 18]));
