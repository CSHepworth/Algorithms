let arr = [1, 2, 3, 4, 5, 6, 7, 8];

function shiftValues(arr) {
    for (var i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = 0;
    return arr;
}

console.log(shiftValues(arr));