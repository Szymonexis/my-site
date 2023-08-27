<script lang="ts">
	export let loading = false;
</script>

<div class="loader">
	{#if loading}
		<div class="spinner__container">
			<div class="spinner" />
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
		position: absolute;
		top: 50%;
		bottom: 50%;
		translate: -50% -50%;

		&__container {
			position: relative;
			backdrop-filter: blur(1000px);
			width: 100%;
			height: 100%;
		}
	}
</style>
