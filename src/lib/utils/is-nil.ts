// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isNil(val: any | undefined | null): boolean {
	return val === undefined || val === null;
}
