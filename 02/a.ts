const file = Bun.file("./input.txt");
const text = await file.text();
const lines = text.split("\n");

let sum = 0;

for (const line of lines) {
	const [l, w, h] = line.split("x").map(Number);

	const surfaceArea = 2 * (l * w + w * h + h * l);
	const smallestSide = Math.min(l * w, w * h, h * l);

	sum += surfaceArea + smallestSide;
}

console.log(sum);
