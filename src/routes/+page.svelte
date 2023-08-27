<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { LANG, geolocateUser } from '$lib';

	const defaultLang = LANG.EN_US;

	if (browser) {
		geolocateUser()
			.then(({ countryCode }) => {
				const redirect = Object.values(LANG).find((value) => value.includes(countryCode));
				goto(redirect ?? `/${defaultLang}`);
			})
			.catch((error) => {
				console.error(error);
				goto(`/${defaultLang}`);
			});
	}
</script>
