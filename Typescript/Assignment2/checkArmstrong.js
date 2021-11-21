var checkArmstrong = function (num) {
    var cnt = 0;
    var temp = num;
    while (temp > 0) {
        temp = Math.floor(temp / 10);
        cnt = cnt + 1;
    }
    temp = num;
    var sum = 0;
    for (var i = 0; i < cnt; i++) {
        sum += (Math.pow((temp % 10), cnt));
        temp = Math.floor(temp / 10);
    }
    if (sum == num) {
        return true;
    }
    return false;
};
var n = 153;
var armstrong = checkArmstrong(n);
if (armstrong) {
    console.log("It is Armstrong number");
}
else {
    console.log("It is not Armstrong number ");
}
