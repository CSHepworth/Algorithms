let arr = [1, 2, 3, 4, 5, 6, 7];

for (var i = 0; i < arr.length; i++) {
    var exp = arr[i] * arr[i]
    arr[i] = exp
}

console.log(arr);