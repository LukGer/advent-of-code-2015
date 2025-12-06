const file = Bun.file("./input.txt");
const text = await file.text();
const lines = text.split("\n");

let current = 50;
let count = 0;

for (const line of lines) {
	const direction: "L" | "R" = line.at(0) as "L" | "R";
	const steps = Number(line.slice(1));

	if (direction === "L") {
		current = (current - steps + 100) % 100;
	} else {
		current = (current + steps) % 100;
	}

	if (current === 0) {
		count++;
	}
}

console.log(count);
