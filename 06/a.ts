const file = Bun.file("./input.txt");
const text = await file.text();
const lines = text.split("\n");

type Equation = {
	numbers: number[];
	operator: "+" | "*";
};

const equations: Equation[] = [];

for (let i = 0; i < lines.length; i++) {
	const line = lines[i]!;

	const parts = line.split(" ").filter(Boolean);

	for (let y = 0; y < parts.length; y++) {
		const equation: Equation = equations[y] ?? { numbers: [], operator: "+" };

		const part = parts[y]!;

		if (part === "+" || part === "*") {
			equation.operator = part;
			continue;
		}

		equation.numbers.push(Number(part));

		equations[y] = equation;
	}
}

let sum = 0;

for (const equation of equations) {
	if (equation.operator === "+") {
		let eqSum = 0;
		for (const num of equation.numbers) {
			eqSum += num;
		}
		sum += eqSum;
	} else {
		let eqProduct = 1;
		for (const num of equation.numbers) {
			eqProduct *= num;
		}
		sum += eqProduct;
	}
}

console.log(sum);
