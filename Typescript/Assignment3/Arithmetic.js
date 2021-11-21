var Arithmetic = /** @class */ (function () {
    function Arithmetic(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Arithmetic.prototype.add = function () {
        return (this.num1 + this.num2);
    };
    Arithmetic.prototype.sub = function () {
        return (this.num1 - this.num2);
    };
    Arithmetic.prototype.mul = function () {
        return (this.num1 * this.num2);
    };
    Arithmetic.prototype.div = function () {
        return (this.num1 / this.num2);
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(30, 20);
var obj2 = new Arithmetic(15, 30);
console.log("Addition : ", obj1.add());
console.log("Subtraction : ", obj1.sub());
console.log("Multiplication : ", obj1.mul());
console.log("Division : ", obj1.div());
console.log("Addition : ", obj2.add());
console.log("Subtraction : ", obj2.sub());
console.log("Multiplication : ", obj2.mul());
console.log("Division : ", obj2.div());
