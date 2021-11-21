function isPrime(num:number) : boolean
{
    if(num%1 != 0)
    {
        return false;
    }
    
    if(num >2)
    {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }

       
        return true;
    }
    return false;
}

let n : number = 11.5;
let prime : boolean = isPrime(n);

if(prime)
{
    console.log("It is a prime number");
}
else{
    console.log("It is not a prime number");
}