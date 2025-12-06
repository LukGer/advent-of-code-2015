const file = Bun.file("./input.txt");
const text = await file.text();
const grid = text.split("\n").map(line => line.split(""));

const rows = grid.length;
const cols = grid[0]?.length ?? 0;

let sum = 0;

for(let y = 0; y < rows; y++) {
	for(let x = 0; x < cols; x++) {
		const current = grid[y]?.[x];

		if(current === "@"){
			const countNeighbors = getCountNeighbors(x, y, grid);

			if(countNeighbors < 4){
				sum++;
			}
		}
	}
}

console.log(sum);


function getCountNeighbors(x: number, y: number, grid: string[][]): number {
	const deltas = [
		[-1, -1], [0, -1], [1, -1],
		[-1, 0],           [1, 0],
		[-1, 1],  [0, 1],  [1, 1],
	] as const;

	let count = 0;

	for(const [dx, dy] of deltas) {
		const nx = x + dx;
		const ny = y + dy;

		if(ny >= 0 && ny < grid.length && nx >= 0 && nx < (grid[ny]?.length ?? 0)) {
			const neighbor = grid[ny]?.[nx];
			if(neighbor === "@") {
				count++;
			}
		}
	}

	return count;
}