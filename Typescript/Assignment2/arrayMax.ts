function arrayMax(arr:number[]) : number
{
    let max : number = arr[0];
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]>max)
        {
            max = arr[i];
        }
    }
    return max;
}

let array : number[] = [23, 89, 6, 29, 56, 45, 77, 32];

let max : number = arrayMax(array);
console.log(`Maximun number is ${max}`);