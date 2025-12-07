const file = Bun.file("./input.txt");
const text = await file.text();
const lines = text.split("\n");

let sum = 0;

for (const line of lines) {
	console.log("CHECKING WORD: ", line);

	if (
		line.includes("ab") ||
		line.includes("cd") ||
		line.includes("pq") ||
		line.includes("xy")
	) {
		console.log("[NAUGHTY]");
		continue;
	}

	// Check for vowels
	let countVowels = 0;

	for (let i = 0; i < line.length; i++) {
		const char = line[i];
		if (
			char === "a" ||
			char === "e" ||
			char === "i" ||
			char === "o" ||
			char === "u"
		) {
			countVowels++;
		}
	}

	if (countVowels < 3) {
		console.log("[NAUGHTY]");
		continue;
	}

	let hasDouble = false;
	for (let i = 0; i < line.length - 1; i++) {
		const char = line[i];
		const nextChar = line[i + 1];
		if (char === nextChar) {
			hasDouble = true;
			break;
		}
	}

	if (!hasDouble) {
		console.log("[NAUGHTY]");
		continue;
	}

	console.log("[NICE]");

	sum++;
}

console.log(sum);
