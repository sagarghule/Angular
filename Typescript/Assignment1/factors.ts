function factors(num : number): number[]
{
    var fact : number[] = [];
    for(let i=1; i<=num/2; i++)
    {
        if(num%i == 0)
        {
            // console.log(i);
            // fact.push(i);
            fact[fact.length] = i;
        }
    }

    return fact;
}

let n : number = 20;
let factor : number[] = factors(n);
console.log(factor);