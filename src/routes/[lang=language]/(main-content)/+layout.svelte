<script lang="ts">
	import NavSection from '$lib/components/nav-section.svelte';
	import { routes } from '$lib/routes';
	import { onMount } from 'svelte';

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
		{#each Object.values(routes) as route, i (i)}
			<NavSection text={route.text} link={route.link} id={`${i}`} />
		{/each}
	</div>

	<div class="scroll">
		<div class="scroll__container">
			<div class="scroll__content">
				<slot />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
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
		$footer-height: 4rem;
		$gap-size: 1rem;

		display: grid;
		grid-template-rows: $footer-height calc(100dvh - $footer-height - $gap-size);
		gap: $gap-size;
	}

	.scroll {
		z-index: 2;
		width: 100%;
		overflow-y: auto;
		display: flex;
		justify-content: center;

		&__container {
			width: 65%;
			text-overflow: wrap;
		}

		&__content {
			padding: 1rem;
		}
	}

	.navigation {
		$margin-sides: 1rem;

		z-index: 2;
		height: 100%;
		width: calc(100% - #{$margin-sides} * 2);
		display: flex;
		align-items: center;
		justify-content: space-around;
		border-bottom: 1px solid white;
		margin: 0 $margin-sides;
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
