<script lang="ts">
	import { page } from '$app/stores';
	import { jobs } from './page.model';
	import { MONTHS } from '$lib/utils/months';

	const { lang } = $page.params;

	function parseDate(date: Date): string {
		if (date.getTime() === new Date(0).getTime()) {
			return 'now';
		}

		const year = date.getFullYear();
		const month = date.getMonth();

		return `${MONTHS[month].slice(0, 3)} ${year}`;
	}
</script>

<h1>My Jobs</h1>

{#each jobs as job}
	<h2>{job.name}</h2>
	<span>
		From:
		<span class="date-pill">{parseDate(job.startDate)} </span>
	</span>
	<span>
		To:
		<span class="date-pill">{parseDate(job.endDate)} </span>
	</span>
{/each}

<style lang="scss">
	.date-pill {
		border-radius: 2rem;
		background-color: white;
		color: #212121;
		min-width: 4rem;
		padding: 0.25rem 0.5rem;
		text-align: center;
	}
</style>
