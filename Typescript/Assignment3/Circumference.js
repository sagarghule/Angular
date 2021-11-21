/*
Create one typescript application which contains one class named as CircleX which will
inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as Circumference which will return
circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(rad) {
        this.PI = 3.14;
        this._radious = rad;
    }
    return Circle;
}());
var Circumference = /** @class */ (function (_super) {
    __extends(Circumference, _super);
    function Circumference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circumference.prototype.calculateCircumference = function () {
        return (2 * this.PI * this._radious);
    };
    return Circumference;
}(Circle));
var obj1 = new Circumference(5);
var obj2 = new Circumference(1);
console.log("Obj1 : Circumference of Circle : ", obj1.calculateCircumference());
console.log("Obj2 : Circumference of Circle : ", obj2.calculateCircumference());
