const file = Bun.file("./input.txt");
const text = await file.text();

const ranges = text.split(",");

let sum = 0;

for (const range of ranges) {
	const [start, end] = range.split("-").map(Number);

	for(let i = start ?? 0; i <= (end ?? 0); i++) {
		const numStr = i.toString();
		const len = numStr.length;

		for(let patternLength = 1; patternLength <= len / 2; patternLength++) {
			if(len % patternLength !== 0) continue;

			const pattern = numStr.substring(0, patternLength);
			const repeated = pattern.repeat(len / patternLength);

			if(repeated === numStr) {
				sum += i;
				break;
			}
		}
	}
}

console.log(sum);