<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { GlobeIcon } from 'svelte-feather-icons';

	import NavSection from '$lib/components/nav-section.svelte';
	import Select from '$lib/components/select.svelte';
	import { LANG, translate } from '$lib';
	import { routes } from '$lib/routes';
	import type { SelectDetail } from '$lib/types';

	const { lang } = $page.params;
	$: currentPath = $page.url.pathname;
	const languages = Object.values(LANG);

	function onSelectLanguage(event: CustomEvent<SelectDetail<string>>): void {
		const newLang = event.detail.selectedValue as LANG;
		const newPath = currentPath.replace(lang, newLang);

		const thisPage = window.location;

		goto(newPath).then(() => thisPage.reload());
	}

	onMount(() => {
		const blob = document.getElementById('blob');

		if (!blob) {
			return;
		}

		document.addEventListener('mousemove', (event) => {
			const { clientX, clientY } = event;

			blob.animate(
				{
					left: `${clientX}px`,
					top: `${clientY}px`
				},
				{ duration: 5000, fill: 'forwards' }
			);
		});
	});
</script>

<div class="layout">
	<div id="blur" />
	<div id="blob" />

	<div class="navigation">
		{#each Object.entries(routes) as route, i (i)}
			{#await translate(route[1].text, lang, {}) then text}
				<NavSection
					{text}
					link={route[0]}
					id={`${i}`}
					selected={route[0] === currentPath.split('/')[2]}
				/>
			{/await}
		{/each}
	</div>

	<div class="scroll">
		<div class="scroll__container">
			<div class="scroll__content">
				<slot />
			</div>
		</div>
	</div>

	<div class="footer">
		<div class="footer__select">
			<GlobeIcon />
			<Select values={languages} selected={lang} direction={'up'} on:select={onSelectLanguage} />
		</div>
	</div>
</div>

<style lang="scss">
	$margin-sides: 1rem;

	#blob {
		z-index: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		height: min(40dvh, 40dvw);
		aspect-ratio: 1;
		background: rgb(255, 70, 70);
		background: linear-gradient(90deg, rgb(255, 70, 70), rgb(70, 70, 255));
		border-radius: 50%;
		animation: rotation 10000ms infinite;
		scale: 1 1.5;
	}

	#blur {
		z-index: 1;
		position: absolute;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(150px);
	}

	.layout {
		$header-height: 4rem;
		$footer-height: 4rem;
		$gap-size: 1rem;

		display: grid;
		grid-template-rows:
			$header-height calc(100dvh - $header-height - $gap-size * 2 - $footer-height)
			$footer-height;
		gap: $gap-size;
	}

	.navigation {
		z-index: 2;
		height: 100%;
		width: calc(100% - #{$margin-sides} * 2);
		border-bottom: 1px solid white;
		margin: 0 $margin-sides;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.scroll {
		z-index: 2;
		width: 100%;
		overflow-y: auto;
		display: flex;
		justify-content: center;

		&__container {
			width: min(65%, 100rem);
			text-overflow: wrap;
		}

		&__content {
			padding: 1rem;
		}
	}

	.footer {
		z-index: 2;
		display: flex;
		width: calc(100% - #{$margin-sides} * 2);
		border-top: 1px solid white;
		margin: 0 $margin-sides;
		flex-direction: row-reverse;
		align-items: center;

		&__select {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}
	}

	@keyframes rotation {
		from {
			rotate: 0deg;
		}

		to {
			rotate: 360deg;
		}
	}
</style>
