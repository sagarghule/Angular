function arrayMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var array = [23, 89, 6, 29, 56, 45, 77, 32];
var max = arrayMax(array);
console.log("Maximun number is " + max);
