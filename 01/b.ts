const file = Bun.file("./input.txt");
const text = await file.text();
const lines = text.split("\n");

let current = 50;
let count = 0;

for (const line of lines) {
	const direction: "L" | "R" = line.at(0) as "L" | "R";
	const steps = Number(line.slice(1));

	if (direction === "L") {
		for(let i = 0; i < steps; i++) {
			current = (current - 1 + 100) % 100;
			if (current === 0) {
				count++;
			}
		}
	} else {
		for(let i = 0; i < steps; i++) {
			current = (current + 1) % 100;
			if (current === 0) {
				count++;
			}
		}
	}
}

console.log(count);
