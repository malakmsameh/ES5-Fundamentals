const seq = num => num * num
console.log(seq(2));

const even = num => num % 2 === 0;
console.log(even(2));
console.log(even(5));

let price_nums = [20 , 1, 4, 5, 2]
const calc = arr => {
	let total =0;
	for (let i = 0; i < price_nums.length;i++)
	{
		total=total+arr[i];
	}
	return total;
}
console.log(calc(price_nums));

let arr = [1, 2, 3, 4,5]

const even_num = arr.filter(num => num %2==0)
console.log(even_num(arr));

const sequare = arr.map(num => num * num);
console.log(sequare);

const sum = arr.reduce((total, num) => total + num, 0);
console.log(sum);