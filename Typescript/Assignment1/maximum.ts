function maximum(num1:number, num2:number, num3:number) : number
{
	let max: number = 0;
	max = (num1 > num2 && num1 > num3) ? num1 : (num2 > num3 ? num2 : num3);
	return max;
}

var no1 : number = 23;
var no2 : number = 89;
var no3 : number = 6;

var max_num : number = maximum(no1, no2, no3);

console.log(`Maximum number is ${max_num}`);
