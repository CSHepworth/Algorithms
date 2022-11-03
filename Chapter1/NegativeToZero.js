let arr = [1, -1, 2, -2, 3, -3];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arr[i] = 0;
    }
}

console.log(arr);