function secondMax(arr:number[]) : number
{
    let max1 : number = arr[0];
    let max2 : number = 0;
    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i] > max1) 
        {
            max2 = max1;
            max1 = arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i]<max1 && arr[i]>max2) 
        {
            max2 = arr[i];
        }
    }
    return max2;
}

let array : number[] = [23, 89, 6, 29, 56, 45, 77, 32];

let max2 : number = secondMax(array);
console.log(`Second maximun number is ${max2}`);