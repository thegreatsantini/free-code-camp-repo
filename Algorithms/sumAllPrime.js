function sumPrimes(num) {
    let sum = 0;
    let count = 2
    while (count <= num) {
        const endPoint = Math.ceil(Math.sqrt(count))
        for (let j = 2; j <= endPoint; j++) {
            console.log(`${count} % ${j}= `, count % j)

            if (count % j === 0 && count != j) {

                console.log('******if statement', count,'\n')
                break;
            }
            console.log('***keep',count, '\n')
            sum += count
            break;
        }
        count++
    }
    return sum
}

console.log(sumPrimes(10));