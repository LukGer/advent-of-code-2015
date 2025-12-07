const file = Bun.file("./input.txt");
const directions = await file.text();

let x = 0;
let y = 0;

const visited = new Set<string>();
visited.add(`${x},${y}`);

for (const direction of directions) {
	if (direction === "^") {
		y--;
	} else if (direction === "v") {
		y++;
	} else if (direction === "<") {
		x--;
	} else if (direction === ">") {
		x++;
	}

	visited.add(`${x},${y}`);
}

console.log(visited.size);
