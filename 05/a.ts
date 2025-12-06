const file = Bun.file("./input.txt");
const text = await file.text();
const lines = text.split("\n");

const ranges: Array<[number, number]> = [];

let idx = 0;
let sum = 0;

for (let i = 0; i < lines.length; i++) {
	const line = lines[i]!;
	if (line.length === 0) {
		idx = i;
		break;
	}

	const [start, end] = line.split("-").map(Number);
	ranges.push([start!, end!]);
}

for (let i = idx + 1; i < lines.length; i++) {
	const num = Number(lines[i]);

	const fresh = ranges.some(([start, end]) => {
		return num >= start && num <= end;
	});

	if (fresh) {
		sum += 1;
	}
}

console.log(sum);
