function sigma(x) {
    let sum = 0;
    for (var i = 1; i <= x; i++) {
        sum += i;
    }
    return sum;
}

console.log(sigma(9));