export function min(...values: number[]): number {
	return values.reduce((acc, value) => (acc > value ? value : acc), values[0]);
}

export function max(...values: number[]): number {
	return values.reduce((acc, value) => (acc < value ? value : acc), values[0]);
}
