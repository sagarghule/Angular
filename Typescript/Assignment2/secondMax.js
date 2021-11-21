function secondMax(arr) {
    var max1 = arr[0];
    var max2 = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        }
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < max1 && arr[i] > max2) {
            max2 = arr[i];
        }
    }
    return max2;
}
var array = [23, 89, 6, 29, 56, 45, 77, 32];
var max2 = secondMax(array);
console.log("Second maximun number is " + max2);
