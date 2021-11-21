// Write a typescript program which contains one function named as Fibonacci. That function accept
// one number from user and print Fibonacci series till that number.
// Input :
// 21
// Output :
// 1 1 2 3 5 8 13 21

function fibonnaci(num : number) : number[]
{
    let arr : number[] = [];
    if(num > 0)
    {
        arr = [1,1]
        while(arr[arr.length-2] + arr[arr.length-1] <num)
        {
            arr.push(arr[arr.length-2] + arr[arr.length-1]);    
        }
    }
    else{
        arr.push(num);
    }

    return arr;
}

let n : number = 20;
let fib : number[] = fibonnaci(n);
console.log(fib);