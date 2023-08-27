<script lang="ts">
	import { translate, type TranslationVariables, capitalize } from '$lib';
	import { onMount } from 'svelte';

	export let key = '';
	export let lang = '';
	export let variables: TranslationVariables = {};
	export let capitalizeText = false;

	let text: Promise<string> | null = null;

	onMount(() => {
		text = translate(key, lang, variables);
	});
</script>

<span>
	{#await text then value}
		{capitalizeText ? capitalize(value) : value}
	{/await}
</span>
