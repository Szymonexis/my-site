<script lang="ts">
	import { page } from '$app/stores';
	import { jobs } from './page.model';

	const { lang } = $page.params;
</script>

<h1>My Jobs</h1>

{#each jobs as job}
	<h2>{job.name}</h2>
{/each}
