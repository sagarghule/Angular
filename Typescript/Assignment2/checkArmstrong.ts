let checkArmstrong = (num : number) : boolean =>{
    let cnt: number = 0;
    let temp : number = num;
    while(temp > 0)
    {
        temp = Math.floor(temp/10);
        cnt = cnt + 1;
    }
    
    temp = num;
    let sum : number = 0;

    for(let i=0; i<cnt; i++)
    {
        sum += ((temp % 10) ** cnt);
        temp = Math.floor(temp/10); 
    }

    if(sum == num)
    {
        return true;
    }
    return false;
}

let n : number = 153;

let armstrong : boolean = checkArmstrong(n);

if(armstrong)
{
    console.log("It is Armstrong number");
}
else
{
    console.log("It is not Armstrong number ");
}