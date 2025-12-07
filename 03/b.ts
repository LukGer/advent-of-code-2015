const file = Bun.file("./input.txt");
const directions = await file.text();

let santaX = 0;
let santaY = 0;

let roboX = 0;
let roboY = 0;

const visited = new Set<string>();
visited.add(`${santaX},${santaY}`);

for (let i = 0; i < directions.length; i++) {
	const direction = directions[i];

	if (i % 2 === 0) {
		if (direction === "^") {
			santaY--;
		} else if (direction === "v") {
			santaY++;
		} else if (direction === "<") {
			santaX--;
		} else if (direction === ">") {
			santaX++;
		}
		visited.add(`${santaX},${santaY}`);
	} else {
		if (direction === "^") {
			roboY--;
		} else if (direction === "v") {
			roboY++;
		} else if (direction === "<") {
			roboX--;
		} else if (direction === ">") {
			roboX++;
		}
		visited.add(`${roboX},${roboY}`);
	}
}

console.log(visited.size);
