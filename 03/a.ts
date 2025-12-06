const file = Bun.file("./input.txt");
const text = await file.text();
const banks = text.split("\n");

let sum = 0;

for(const bank of banks) {
	let tens = "0";
	let ones = "0";

	for(let i = 0; i < bank.length - 1; i++) {
		const num = bank[i] ?? "0";

		if(num > tens){
			tens = num;
			ones = "0";
			for(let j = i + 1; j < bank.length; j++) {
				const digit = bank[j] ?? "0";
				if(digit >= ones){
					ones = digit;
				}
			}
		}
	}

	sum += Number(tens) * 10 + Number(ones);
}

console.log(sum);