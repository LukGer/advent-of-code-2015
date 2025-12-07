const file = Bun.file("./input.txt");
const text = await file.text();
const lines = text.split("\n");

let sum = 0;

for (const line of lines) {
	console.log("CHECKING WORD: ", line);
	// Checking if two pairs of characters exist
	let foundPair = false;
	for (let i = 0; i < line.length - 1; i++) {
		const pairToCheck = line[i]! + line[i + 1]!;

		if (line.substring(i + 2).includes(pairToCheck)) {
			foundPair = true;
			break;
		}
	}

	if (!foundPair) {
		console.log("[NAUGHTY] No pair found");
		continue;
	}

	// Check for repeating letterns with one between them
	let foundLetter = false;
	for (let i = 0; i < line.length - 2; i++) {
		const char = line[i]!;
		const nextChar = line[i + 2]!;
		if (char === nextChar) {
			foundLetter = true;
			break;
		}
	}

	if (!foundLetter) {
		console.log("[NAUGHTY] No letter found");
		continue;
	}

	console.log("[NICE]");
	sum++;
}

console.log(sum);
