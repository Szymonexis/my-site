<script lang="ts">
	import VisibilityFade from '$lib/components/visibility-fade.svelte';
	import TranslateText from '$lib/components/translate-text.svelte';

	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { routes } from '$lib';

	const { lang } = $page.params;

	let texts = [
		{ value: 'INTRO.FIRST', selected: true },
		{ value: 'INTRO.SECOND', selected: false },
		{
			value: 'INTRO.THIRD.TEXT',
			colorful: 'INTRO.THIRD.COLORFUL',
			selected: false
		}
	];
	let showContinueButton = false;

	const intervalTime = 3000;

	const intervalId = setInterval(() => {
		const current = texts.findIndex(({ selected }) => selected);

		if (current === texts.length - 1) {
			showContinueButton = true;
			clearInterval(intervalId);
			return;
		}

		texts = texts.map((val, index) => ({
			...val,
			selected: index === current + 1
		}));
	}, intervalTime);

	function onMeetMeClick(): void {
		goto([lang, routes.ABOUT_ME.link].join('/'));
	}
</script>

<div class="container">
	{#each texts as text}
		<div class="intro">
			<VisibilityFade visible={text.selected} fadeTime={1500}>
				<TranslateText key={text.value} {lang} />
				{#if text.colorful}
					<span class="colorful">
						<TranslateText key={text.colorful} {lang} />
					</span>
				{/if}
			</VisibilityFade>
		</div>
	{/each}

	{#if showContinueButton}
		<button class="meet-me" on:click={onMeetMeClick}>
			<TranslateText key="INTRO.MEET_ME_BUTTON" {lang} />
		</button>
	{/if}
</div>

<style lang="scss">
	.container {
		width: 100%;
		height: 100dvh;
		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;
		text-transform: uppercase;
	}

	.intro {
		position: absolute;
		font-size: 72px;
		font-weight: 900;
		transition: opacity ease-in-out 1500ms;
	}

	.colorful {
		background: rgb(0, 11, 209);
		background: linear-gradient(
			90deg,
			rgb(255, 70, 70),
			rgb(255, 0, 255),
			rgb(70, 70, 255),
			rgb(255, 0, 255),
			rgb(255, 70, 70)
		);
		background-size: 200% auto;
		background-clip: text;
		color: transparent;
		-webkit-background-clip: text;
		animation: gradientAnimation 5000ms infinite linear;
	}

	.meet-me {
		position: absolute;
		top: 75%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	@keyframes gradientAnimation {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}
</style>
