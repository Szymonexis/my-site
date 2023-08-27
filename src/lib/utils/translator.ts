export enum LANG {
	EN_US = 'en-US',
	PL_PL = 'pl-PL'
}

export interface TranslationVariables {
	[key: string]: string | number;
}

export class Translator {
	private _lang = LANG.EN_US;

	constructor(lang: LANG) {
		this._lang = lang;
	}

	async translate(
		translationKey: string,
		variables: TranslationVariables
	): Promise<string> {
		const subKeys = translationKey.split('.');
		const translationFile = await this._getTranslationsFile();

		const translatedText = this._getTranslatedText(translationFile, subKeys);

		return this._replaceStringParts(translatedText, variables);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private _getTranslatedText(translationsFile: any, subKeys: string[]): string {
		let object = translationsFile;

		for (let i = 0; i < subKeys.length; i++) {
			if (object === undefined || object === null) {
				break;
			}

			object = object[subKeys[i]];
		}

		return object ?? subKeys.join('.');
	}

	private _replaceStringParts(
		inputString: string,
		variables: TranslationVariables
	): string {
		let result = inputString;

		for (const [key, value] of Object.entries(variables)) {
			// Create a RegExp that matches the variable key enclosed in curly braces
			const regex = new RegExp(`\\{\\s*${key}\\s*\\}`, 'g');

			// Replace occurrences of the variable with its value
			result = result.replace(regex, String(value));
		}

		return result;
	}

	private async _getTranslationsFile() {
		const response = await import(`../i18n/${this._lang}.json`);
		return response;
	}
}

export async function translate(
	translationKey: string,
	lang: string,
	variables: TranslationVariables
): Promise<string> {
	const currentLang = Object.values(LANG).find((val) => val === lang);
	const pattern = /^[A-Z._0-9]+$/;
	const correctFrom = pattern.test(translationKey);

	if (!correctFrom) {
		console.error(
			'Key in an incorrect form - correct form is matching with this regex /^[A-Z.]+$/'
		);

		return translationKey;
	}

	if (!currentLang) {
		console.error('Bad lang');

		return translationKey;
	}

	const translator = new Translator(currentLang);

	return await translator.translate(translationKey, variables);
}
