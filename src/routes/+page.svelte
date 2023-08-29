<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { LANG, geolocateUser } from '$lib';
	import Loader from '$lib/components/loader.svelte';

	const defaultLang = LANG.EN_US;
	let loading = false;

	if (browser) {
		loading = true;

		geolocateUser()
			.then(({ countryCode }) => {
				loading = false;
				const redirect = Object.values(LANG).find((value) => value.includes(countryCode));
				goto(redirect ?? `/${defaultLang}`);
			})
			.catch((error) => {
				loading = false;
				console.error(error);
				goto(`/${defaultLang}`);
			});
	}
</script>

<Loader {loading} />
