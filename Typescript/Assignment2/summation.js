function summation(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
var array = [23, 6, 7, 4, 5, 7];
var sum = summation(array);
console.log("Addition is " + sum);
