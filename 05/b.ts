const file = Bun.file("./input.txt");
const text = await file.text();
const lines = text.split("\n");

const ranges: Array<[number, number]> = [];

for (let i = 0; i < lines.length; i++) {
	const line = lines[i]!;
	if (line.length === 0) {
		break;
	}

	const [start, end] = line.split("-").map(Number);
	ranges.push([start!, end!]);
}

// Sort ranges by start position
ranges.sort((a, b) => a[0] - b[0]);

// Merge overlapping ranges
const merged: Array<[number, number]> = [];
for (const [start, end] of ranges) {
	if (merged.length === 0 || merged[merged.length - 1]![1] < start - 1) {
		// No overlap, add new range
		merged.push([start, end]);
	} else {
		// Overlap or adjacent, merge with previous range
		merged[merged.length - 1]![1] = Math.max(
			merged[merged.length - 1]![1],
			end,
		);
	}
}

// Calculate total count
let count = 0;
for (const [start, end] of merged) {
	count += end - start + 1;
}

console.log(count);
