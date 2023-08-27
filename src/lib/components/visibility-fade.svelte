<script lang="ts">
	export let visible = true;
	export let fadeTime = 3000;
	export let fadeFunction = 'ease-in-out';
</script>

<div
	class={visible ? 'fade--visible' : 'fade--invisible'}
	style={`transition: opacity ${fadeFunction} ${fadeTime}ms`}
>
	<slot />
</div>

<style lang="scss">
	.fade {
		&--visible {
			opacity: 1;
		}

		&--invisible {
			opacity: 0;
		}
	}
</style>
