function factors(num) {
    var fact = [];
    for (var i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            // console.log(i);
            // fact.push(i);
            fact[fact.length] = i;
        }
    }
    return fact;
}
var n = 20;
var factor = factors(n);
console.log(factor);
