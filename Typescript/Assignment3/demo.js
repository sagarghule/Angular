class AreaCircle
{
    radious;
    PI = 3.14;

    constructor(rad)
    {
        this._radious = rad;
    }

    calculateArea()
    {
        return(this.PI * this._radious**2);
    }

}

var obj1 = new AreaCircle(5);
var obj2 = new AreaCircle(1);

console.log("Obj1 : Area of Circle : ",obj1.calculateArea());
console.log("Obj2 : Area of Circle : ",obj2.calculateArea());