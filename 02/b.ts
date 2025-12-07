const file = Bun.file("./input.txt");
const text = await file.text();
const lines = text.split("\n");

let sum = 0;

for (const line of lines) {
	const [l, w, h] = line.split("x").map(Number);

	const shortestCircumference = 2 * (l + w + h - Math.max(l, w, h));
	const volume = l * w * h;

	sum += shortestCircumference + volume;
}

console.log(sum);
