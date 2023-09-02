<script lang="ts">
	import myPhotoLinkedin from '$lib/assets/my-photo-linkedin.jpeg';
	import mBankLogo from '$lib/assets/mBank-logo.png';
	import wppLogo from '$lib/assets/WPP-logo.svg';
	import TranslateText from '$lib/components/translate-text.svelte';
	import { ROUTES, routes } from '$lib/routes';
	import { page } from '$app/stores';
	import { capitalize } from '$lib';
	import { links } from './page.model';

	const { lang } = $page.params;

	function getSinceYears(): number {
		const softwareDeveloperStartTimestamp = new Date(2021, 5).getTime();
		const diffTime = Math.abs(Date.now() - softwareDeveloperStartTimestamp);
		const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
		const sinceYears = Math.round(diffYears);

		return sinceYears;
	}
</script>

<img class="my-photo" src={myPhotoLinkedin} alt="Szymon Kaszuba-Galka" />
<h1><TranslateText key="ABOUT_ME.HEADERS.TITLE" {lang} transformTextFunction={capitalize} /></h1>

<h2><TranslateText key="ABOUT_ME.HEADERS.INTRO" {lang} transformTextFunction={capitalize} /></h2>

<p>
	<TranslateText key="ABOUT_ME.TEXTS.0" {lang} variables={{ sinceYears: getSinceYears() }} />
</p>

<p>
	<TranslateText key="ABOUT_ME.TEXTS.1" {lang} />
	<a href={links.github.link}>
		<TranslateText key={links.github.text} {lang} />
	</a>
	<TranslateText key="ABOUT_ME.TEXTS.2" {lang} />
	<a href={links.linkedIn.link}>
		<TranslateText key={links.linkedIn.text} {lang} />
	</a>
	<TranslateText key="ABOUT_ME.TEXTS.3" {lang} />
</p>

<h2>
	<TranslateText key="ABOUT_ME.HEADERS.MY_INTERESTS" {lang} transformTextFunction={capitalize} />
</h2>

<p>
	<TranslateText key="ABOUT_ME.TEXTS.14" {lang} />
</p>

<p>
	<TranslateText key="ABOUT_ME.TEXTS.15" {lang} />
	<a href={links.thisSite.link}>
		<TranslateText key={links.thisSite.text} {lang} />
	</a>
	<TranslateText key="ABOUT_ME.TEXTS.16" {lang} />
</p>

<h2>
	<TranslateText key="ABOUT_ME.HEADERS.JOBS_OVERVIEW" {lang} transformTextFunction={capitalize} />
</h2>

<img class="mBank-logo" src={mBankLogo} alt="mBank logo" />

<p>
	<TranslateText key="ABOUT_ME.TEXTS.4" {lang} />
	<a href={links.mBank.link}>
		<b>
			<TranslateText key={links.mBank.text} {lang} />
		</b>
	</a>
	<TranslateText key="ABOUT_ME.TEXTS.5" {lang} />
</p>

<p>
	<TranslateText key="ABOUT_ME.TEXTS.6" {lang} />
</p>

<p>
	<TranslateText key="ABOUT_ME.TEXTS.7" {lang} />
	<a href={links.digimonkeys.link}>
		<b>
			<TranslateText key={links.digimonkeys.text} {lang} />
		</b>
	</a>
	<TranslateText key="ABOUT_ME.TEXTS.8" {lang} />
	<a href={links.wpp.link}>
		<b>
			<TranslateText key={links.wpp.text} {lang} />
		</b>
	</a>
	<TranslateText key="ABOUT_ME.TEXTS.9" {lang} />
</p>

<img class="wpp-logo" src={wppLogo} alt="WPP logo" />

<p>
	<TranslateText key="ABOUT_ME.TEXTS.10" {lang} />
	<a href={links.drHaircare.link}>
		<b>
			<TranslateText key={links.drHaircare.text} {lang} />
		</b>
	</a>
	<TranslateText key="ABOUT_ME.TEXTS.11" {lang} />
</p>

<p>
	<TranslateText key="ABOUT_ME.TEXTS.12" {lang} />
	<a href={ROUTES.JOBS}>
		<TranslateText key={routes.jobs.text} {lang} transformTextFunction={capitalize} />
	</a>
	<TranslateText key="ABOUT_ME.TEXTS.13" {lang} />
</p>

<style lang="scss">
	.my-photo {
		float: left;
		margin: 1rem;
		height: 14rem;
		aspect-ratio: 1;
		border-radius: 50%;
	}

	.mBank-logo {
		float: right;
		margin: 1rem;
	}

	.wpp-logo {
		float: left;
		margin: 1rem;
		height: 3rem;
		padding: 1rem;
		background-color: aliceblue;
	}
</style>
