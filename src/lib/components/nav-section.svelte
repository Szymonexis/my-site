<script lang="ts">
	import { onMount } from 'svelte';

	export let id = '0';
	export let text = '';
	export let link = '';

	let currentText = text;
	const letters = 'ABCDEFGHIJKLMNOPRSTUWVXYZ';

	let aTag: HTMLElement | null = null;

	onMount(() => {
		aTag = document.getElementById(id);
	});

	let intervalId: number | null = null;

	function onMouseEnter(aTag: HTMLElement | null): void {
		if (aTag === null) {
			return;
		}

		let iteration = 0;

		intervalId = setInterval(() => {
			currentText = currentText
				.split('')
				.map((_, index) =>
					index > iteration ? letters[Math.floor(Math.random() * letters.length)] : text[index]
				)
				.join('');

			iteration += 1;

			if (iteration > currentText.length) {
				if (intervalId !== null) {
					clearInterval(intervalId);
				}
			}
		}, 50);
	}

	function onMouseLeave(): void {
		if (intervalId !== null) {
			clearInterval(intervalId);
		}

		currentText = text;
	}
</script>

<a
	{id}
	class="nav-section"
	href={link}
	on:mouseenter={() => onMouseEnter(aTag)}
	on:mouseleave={() => onMouseLeave()}
>
	{currentText}
</a>

<style lang="scss">
	.nav-section {
		color: white;
		font-family: 'Space Mono', monospace;
		font-weight: 700;
		font-size: 24px;
		padding: 0.5rem;
		text-transform: uppercase;
		user-select: none;
		border-radius: 1rem;
		text-decoration: underline;
		text-underline-offset: 3px;
		cursor: pointer;
	}
</style>
