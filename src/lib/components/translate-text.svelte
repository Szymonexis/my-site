<script lang="ts">
	import { translate, type TranslationVariables } from '$lib';
	import { onMount } from 'svelte';

	export let key = '';
	export let lang = '';
	export let variables: TranslationVariables = {};

	let text: Promise<string> | null = null;

	onMount(() => {
		text = translate(key, lang, variables);
	});
</script>

<span>
	{#await text then value}
		{value}
	{/await}
</span>
