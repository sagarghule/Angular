/*Create one typescript application which contains one class named as Arithmetic.
Arithmetic class contains three characteristics (Class data members) as Number1, Number2.
Create one parametrised constructor which accept two values and assign it to Number1 and
Number2.
In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction ,
Multiplication and Division.
Addition method will add Number1 , Number2 & return result.
Subtraction method will subtract Number1 , Number2 & return result.
Multiplication method will multiply Number1 , Number2 & return result.
Division method will divide Number1 , Number2 & return result.
After designing the class create two objects of that class by providing some hardcoded value.
Call all the methods by using both the objects.
*/



class Arithmetic
{
    private num1 : number;
    private num2 : number;

    constructor(num1 :number, num2:number)
    {
        this.num1 = num1;
        this.num2 = num2;
    }
    public add() : number
    {
        return(this.num1 + this.num2);
    }
    public sub() : number
    {
        return(this.num1 - this.num2);
    }
    public mul() : number
    {
        return(this.num1 * this.num2);
    }
    public div() : number
    {
        return(this.num1 / this.num2);
    }
}

var obj1 = new Arithmetic(30,20);
var obj2 = new Arithmetic(15,30);

console.log("Addition : ",obj1.add());
console.log("Subtraction : ",obj1.sub());
console.log("Multiplication : ",obj1.mul());
console.log("Division : ",obj1.div());

console.log("Addition : ",obj2.add());
console.log("Subtraction : ",obj2.sub());
console.log("Multiplication : ",obj2.mul());
console.log("Division : ",obj2.div());