<script lang="ts">
	import { translate, type TranslationVariables, capitalize } from '$lib';
	import { onMount } from 'svelte';

	export let key = '';
	export let lang = '';
	export let variables: TranslationVariables = {};
	export let transformTextFunction: (text: string | null) => string = (text) => text ?? '';

	let text: Promise<string> | null = null;

	onMount(() => {
		text = translate(key, lang, variables);
	});
</script>

<span>
	{#await text then value}
		{transformTextFunction ? transformTextFunction(value) : value}
	{/await}
</span>
