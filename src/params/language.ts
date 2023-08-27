import { LANG } from '$lib';

export function match(value: string): boolean {
	return !!Object.values(LANG).find((val) => val === value);
}
