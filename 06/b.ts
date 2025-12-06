const file = Bun.file("./input.txt");
const text = await file.text();
const lines = text.split("\n");

type Equation = {
	numbers: number[];
	numbersLength: number;
	startIndex: number;
	operator: "+" | "*";
};

const countNumbersPerEquation = 4;

const equations: Equation[] = [];

const operatorLine = lines[countNumbersPerEquation]!;

let currentEquation: Equation = {
	numbers: [],
	numbersLength: 0,
	startIndex: 0,
	operator: operatorLine[0] as "+" | "*",
};

let numbersLength = 0;

for (let i = 1; i < operatorLine.length; i++) {
	const char = operatorLine[i]!;
	numbersLength++;

	if (char !== " ") {
		currentEquation.numbersLength = numbersLength - 1;
		equations.push(currentEquation);
		currentEquation = {
			numbers: [],
			numbersLength: 0,
			startIndex: i,
			operator: char as "+" | "*",
		};
		numbersLength = 0;
	}
}

currentEquation.numbersLength = numbersLength;
equations.push(currentEquation);

for (let i = 0; i < equations.length; i++) {
	const equation = equations[i]!;

	for (let j = 0; j < equation.numbersLength; j++) {
		const currentNumDigits = [];
		for (let y = 0; y < countNumbersPerEquation; y++) {
			currentNumDigits.push(lines[y]?.[equation.startIndex + j] ?? " ");
		}

		const numStr = currentNumDigits.join("").trim();

		if (numStr.length > 0) {
			equation.numbers.push(Number(numStr));
		}
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
