const file = Bun.file("./input.txt");
const text = await file.text();

const ranges = text.split(",");

let sum = 0;

for (const range of ranges) {
	const [start, end] = range.split("-").map(Number);

	for(let i = start ?? 0; i <= (end ?? 0); i++) {
		const numStr = i.toString();
		const len = numStr.length;

		if(len % 2 !== 0) continue;

		let found = true;

		for(let i = 0; i < numStr.length / 2; i++) {
			if(numStr[i] !== numStr[len / 2 + i]){
				found = false;
				break;
			}
		}

		if(found) {
			sum += i;
		}
	}
}

console.log(sum);