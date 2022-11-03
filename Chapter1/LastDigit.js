function lastDigitAtoB(a, b) {
    let exp = a ** b;
    console.log(exp);
    let text = exp.toString();
    let last = text.slice(-1);
    return last
}

console.log(lastDigitAtoB(12, 5));