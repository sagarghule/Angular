/*
Create one typescript application which contains one class named as Circumference which will
inherits above Circle class.
In CircleX class we have to write one method (Behaviours) as Circumference which will return
circumference of circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.
*/


class Circle
{
    protected _radious : number;
    protected PI : number = 3.14;

    constructor(rad : number)
    {
        this._radious = rad;
    }

    // protected calculateCircumference()
    // {
    // }

}

class Circumference extends Circle
{
    calculateCircumference() : number
    {
        return(2*this.PI*this._radious);
    }
}

var obj1 = new Circumference(5);
var obj2 = new Circumference(1);

console.log("Obj1 : Circumference of Circle : ",obj1.calculateCircumference());
console.log("Obj2 : Circumference of Circle : ",obj2.calculateCircumference());