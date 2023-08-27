export function capitalize(text: string | null): string {
	if (text === null) {
		return '';
	}

	const capitalizedText = text
		.split(' ')
		.map((word) =>
			word
				.split('')
				.map((c, i) => (i === 0 ? c.toUpperCase() : c.toLowerCase()))
				.join('')
		)
		.join(' ');

	return capitalizedText;
}
