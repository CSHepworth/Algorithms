function threesFives(start, end) {
    let sum = 0;
    for (var i = start; i <= end; i++) {
        if ((i % 3 == 0 && i % 5 !== 0) || (i % 5 == 0 && i % 3 !== 0)) {
            sum += i;
        }
    }
    return sum;
}

console.log(threesFives(100, 4000000));