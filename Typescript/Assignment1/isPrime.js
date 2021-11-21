function isPrime(num) {
    if (num % 1 != 0) {
        return false;
    }
    if (num > 2) {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
    return false;
}
var n = 11.5;
var prime = isPrime(n);
if (prime) {
    console.log("It is a prime number");
}
else {
    console.log("It is not a prime number");
}
