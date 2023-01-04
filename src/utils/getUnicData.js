export function getUnicData(arr) {
	return arr.map((e) => ({
		...e,
		keywords: [...new Set(e.keywords.split(" "))].join(" ")
	}));
}
