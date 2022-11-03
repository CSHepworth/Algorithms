function generateChange(x) {
    x *= 100
    const quarter = 25;
    const dime = 10;
    const nickel = 5;
    let quarterCount = 0;
    let dimeCount = 0;
    let nickelCount = 0;
    let pennyCount = 0;
    let i = 1;
    while (quarter <= x) {
        quarterCount++;
        x -= quarter;
    }
    while (dime <= x) {
        dimeCount++;
        x -= dime;
    }
    while (nickel <= x) {
        nickelCount++;
        x -= nickel;
    }
    pennyCount = x;
    console.log(`Quarters: ${quarterCount} \nDimes: ${dimeCount} \nNickels: ${nickelCount} \nPennies: ${pennyCount}`);
}

generateChange(0.01);

