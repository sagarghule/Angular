function calculateArea(r:number, PI:number = 3.14) : number
{
    let area : number = PI * r * r;

    return area;
}

let radius : number = 5;
var carea : number = calculateArea(radius);

console.log(carea);