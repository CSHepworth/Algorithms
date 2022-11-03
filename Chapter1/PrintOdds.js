function printOdds(x) {
    for (var i = 1; i <= x; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

printOdds(255);