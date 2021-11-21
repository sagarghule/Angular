function maximum(num1, num2, num3) {
    var max = 0;
    max = (num1 > num2 && num1 > num3) ? num1 : (num2 > num3 ? num2 : num3);
    return max;
}
var no1 = 23;
var no2 = 89;
var no3 = 6;
var max_num = maximum(no1, no2, no3);
console.log("Maximum number is " + max_num);
