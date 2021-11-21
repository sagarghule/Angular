/*
Create one typescript application which contains one class named as Circle.
Circle class contains two characteristics (Class data members) as Radius, PI.
Create one parametrised constructor which accept one value and assign it to Radius. Value of
PI member is set to 3.14.
In Circle class we have to one method (Behaviours) as Area which will return area of Circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call the method Area by using both the objects.
*/
var AreaCircle = /** @class */ (function () {
    function AreaCircle(rad) {
        this.PI = 3.14;
        this._radious = rad;
    }
    AreaCircle.prototype.calculateArea = function () {
        return (this.PI * Math.pow(this._radious, 2));
    };
    return AreaCircle;
}());
var obj1 = new AreaCircle(5);
var obj2 = new AreaCircle(1);
console.log("Obj1 : Area of Circle : ", obj1.calculateArea());
console.log("Obj2 : Area of Circle : ", obj2.calculateArea());
