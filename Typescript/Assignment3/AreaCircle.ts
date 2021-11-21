/*
Create one typescript application which contains one class named as AreaCircle.
Circle class contains two characteristics (Class data members) as Radius, PI.
Create one parametrised constructor which accept one value and assign it to Radius. Value of
PI member is set to 3.14.
In Circle class we have to one method (Behaviours) as Area which will return area of Circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call the method Area by using both the objects.
*/



class AreaCircle
{
    private _radious : number;
    PI : number = 3.14;

    constructor(rad : number)
    {
        this._radious = rad;
    }

    calculateArea():number
    {
        return(this.PI * this._radious**2);
    }

}

var obj1 = new AreaCircle(5);
var obj2 = new AreaCircle(1);

console.log("Obj1 : Area of Circle : ",obj1.calculateArea());
console.log("Obj2 : Area of Circle : ",obj2.calculateArea());