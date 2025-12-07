const key = "iwrupvqb";

let i = 0;
while (true) {
	const hasher = new Bun.CryptoHasher("md5");
	const hash = hasher.update(key + i).digest("hex");
	if (hash.startsWith("000000")) {
		console.log(i);
		break;
	}
	i++;
}
