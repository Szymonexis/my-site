<script lang="ts">
	import { isNil } from '$lib/utils/is-nil';
	import { min } from '$lib/utils/min-max';
	import { onMount } from 'svelte';

	export let loading = false;
	export let size = 100;
	export let width = size / 25;

	function setSpinnerSize(): void {
		const loader = document.getElementById('loader');

		if (isNil(loader)) {
			return;
		}

		const { height: h, width: w } = (loader as HTMLElement).getBoundingClientRect();

		size = min(h, w) / 3;
		width = size / 25;
	}

	onMount(() => {
		setSpinnerSize();

		window.addEventListener('resize', () => {
			setSpinnerSize();
		});
	});
</script>

<div id="loader" class="loader">
	{#if loading}
		<div class="spinner__container">
			<progress
				class="spinner"
				style={`height: ${size}px; width: ${size}px; border-width: ${width}px;`}
			/>
		</div>
	{:else}
		<slot />
	{/if}
</div>

<style lang="scss">
	.loader {
		width: 100%;
		height: 100%;
	}

	.spinner {
		&__container {
			position: relative;
			width: 100%;
			height: 100%;
		}

		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		border-radius: 50%;
	}

	/* Remove browser styles */
	progress {
		appearance: none;
		background: none;
	}
	progress::-moz-progress-bar {
		background: none;
	}
	progress::-webkit-progress-bar {
		display: none;
	}
	progress::-ms-fill {
		animation-name: none;
	}
	@media (-ms-high-contrast) {
		/* …but show native spinner in Windows High-Contrast Mode */
		progress::-ms-fill {
			animation-name: -ms-ring;
		}
	}

	progress {
		margin: 1rem auto;
		width: 1em;
		height: 1em; /* Rely on font-size for spinner dimensions */
		font-size: 5em;
		border: 0.2em solid;
		border-radius: 99em; /* set to a ludicrously large value instead of 100% to avoid becoming an oval if aspect ratio is off somehow */
	}

	@supports (clip-path: polygon(0 0)) {
		progress {
			animation: inchworm 5s linear infinite, spin 1.5s linear infinite;
		}
	}

	@keyframes spin {
		100% {
			transform: rotate(360deg);
		}
	}

	/* See the blog post for how I got these values: https://dev.to/tigt/that-dang-material-design-spinner-in-one-element-3b3n */
	/* <generated-keyframes> */
	@keyframes inchworm {
		4.167% {
			clip-path: polygon(50% 150%, -50% 50%, -50% 50%, 50% -50%, 50% 50%);
		}
		8.333% {
			clip-path: polygon(-50% 50%, -50% 50%, -50% 50%, 50% -50%, 50% 50%);
		}
		12.5% {
			clip-path: polygon(0% -50%, 0% -50%, 0% -50%, 50% -50%, 50% 50%);
		}
		16.667% {
			clip-path: polygon(50% -50%, 50% -50%, 50% -50%, 150% 50%, 50% 50%);
		}
		20.833% {
			clip-path: polygon(50% -50%, 50% -50%, 150% 50%, 50% 150%, 50% 50%);
		}
		25% {
			clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%, 50% 50%);
		}
		29.167% {
			clip-path: polygon(150% 50%, 150% 50%, 50% 150%, -50% 50%, 50% 50%);
		}
		33.333% {
			clip-path: polygon(50% 150%, 50% 150%, 50% 150%, -50% 50%, 50% 50%);
		}
		37.5% {
			clip-path: polygon(-50% 100%, -50% 100%, -50% 100%, -50% 50%, 50% 50%);
		}
		41.667% {
			clip-path: polygon(-50% 50%, -50% 50%, -50% 50%, 50% -50%, 50% 50%);
		}
		45.833% {
			clip-path: polygon(-50% 50%, -50% 50%, 50% -50%, 150% 50%, 50% 50%);
		}
		50% {
			clip-path: polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%, 50% 50%);
		}
		54.167% {
			clip-path: polygon(50% -50%, 150% 50%, 150% 50%, 50% 150%, 50% 50%);
		}
		58.333% {
			clip-path: polygon(150% 50%, 150% 50%, 150% 50%, 50% 150%, 50% 50%);
		}
		62.5% {
			clip-path: polygon(100% 150%, 100% 150%, 100% 150%, 50% 150%, 50% 50%);
		}
		66.667% {
			clip-path: polygon(50% 150%, 50% 150%, 50% 150%, -50% 50%, 50% 50%);
		}
		70.833% {
			clip-path: polygon(50% 150%, 50% 150%, -50% 50%, 50% -50%, 50% 50%);
		}
		75% {
			clip-path: polygon(50% 150%, -50% 50%, 50% -50%, 150% 50%, 50% 50%);
		}
		79.167% {
			clip-path: polygon(-50% 50%, -50% 50%, 50% -50%, 150% 50%, 50% 50%);
		}
		83.333% {
			clip-path: polygon(50% -50%, 50% -50%, 50% -50%, 150% 50%, 50% 50%);
		}
		87.5% {
			clip-path: polygon(150% 0%, 150% 0%, 150% 0%, 150% 50%, 50% 50%);
		}
		91.667% {
			clip-path: polygon(150% 50%, 150% 50%, 150% 50%, 50% 150%, 50% 50%);
		}
		95.833% {
			clip-path: polygon(150% 50%, 150% 50%, 50% 150%, -50% 50%, 50% 50%);
		}
		0%,
		100% {
			clip-path: polygon(150% 50%, 50% 150%, -50% 50%, 50% -50%, 50% 50%);
		}
	}
	/* </generated-keyframes> */
</style>
