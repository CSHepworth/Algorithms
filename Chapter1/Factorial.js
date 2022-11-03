function factorial(x) {
    let product = 1;
    for (var i = 1; i <= x; i++) {
        product *= i;
    }
    return product;
}

console.log(factorial(3));