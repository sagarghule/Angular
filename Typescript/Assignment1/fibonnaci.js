// Write a typescript program which contains one function named as Fibonacci. That function accept
// one number from user and print Fibonacci series till that number.
// Input :
// 21
// Output :
// 1 1 2 3 5 8 13 21
function fibonnaci(num) {
    var arr = [];
    if (num > 0) {
        arr = [1, 1];
        while (arr[arr.length - 2] + arr[arr.length - 1] < num) {
            arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
        }
    }
    else {
        arr.push(num);
    }
    return arr;
}
var n = 20;
var fib = fibonnaci(n);
console.log(fib);
