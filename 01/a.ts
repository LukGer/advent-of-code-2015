const file = Bun.file("./input.txt");
const text = await file.text();

let current = 0;

for (let i = 0; i < text.length; i++) {
	const c = text[i];
	if (c === "(") {
		current++;
	} else {
		current--;
	}
}

console.log(current);
