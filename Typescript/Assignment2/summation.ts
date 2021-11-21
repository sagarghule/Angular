function summation(arr:number[]) : number
{
    let sum : number = 0;
    for(let i=0; i<arr.length; i++)
    {
        sum += arr[i];
    }
    return sum;
}

let array : number[] = [23,6,7,4,5,7];

let sum : number = summation(array);
console.log(`Addition is ${sum}`);