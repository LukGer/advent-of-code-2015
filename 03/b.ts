const file = Bun.file("./input.txt");
const text = await file.text();
const banks = text.split("\n");

let sum = 0;

for(const bank of banks) {
	const maxDigits: string[] = new Array(12).fill("0");
	let currentIndex = -1;

	for(let pos = 0; pos < 12; pos++) {

		for(let d = currentIndex + 1; d < bank.length - (11 - pos); d++) {
			const digit = bank[d] ?? "0";

			if(digit > (maxDigits[pos] ?? "0")) {
				maxDigits[pos] = digit;
				maxDigits.fill("0", pos + 1);
				currentIndex = d;
			}
		}
	}

	console.log(`Bank ${bank} -> ${maxDigits.join("")}`);

	sum += Number(maxDigits.join(""));
}

console.log(sum);