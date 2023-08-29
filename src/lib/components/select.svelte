<script lang="ts" generics="T">
	import { createEventDispatcher } from 'svelte';
	import type { SelectEvent } from '$lib/types';
	import { ChevronDownIcon, ChevronUpIcon } from 'svelte-feather-icons';

	export let values: T[] = [];
	export let placeholder: string = '';
	export let selected: T | null = null;
	export let direction: 'up' | 'down' = 'down';
	export let getOptionText: (value: T) => string = (value) => new String(value).toString();
	export let compare: (a: T, b: T) => boolean = (a, b) => a === b;

	let expanded = false;
	let optionsStyle = 'top: 2rem; left: 0;';
	let selectExpandedStyle = 'border-bottom-left-radius: 0; border-bottom-right-radius: 0;';
	let optionsExpandedStyle = 'border-top-left-radius: 0; border-top-right-radius: 0;';

	const dispatch = createEventDispatcher<SelectEvent<T>>();

	if (direction === 'up') {
		optionsStyle = 'bottom: 2rem; left: 0;';
		optionsExpandedStyle = 'border-bottom-left-radius: 0; border-bottom-right-radius: 0;';
		selectExpandedStyle = 'border-top-left-radius: 0; border-top-right-radius: 0;';
	}

	function selectOption(selectedValue: T): void {
		dispatch('select', {
			selectedValue
		});

		selected = selectedValue;
	}

	function onToggleExpanded(): void {
		expanded = !expanded;
	}
</script>

<div
	class="select"
	style={`${expanded && selectExpandedStyle}`}
	role="listbox"
	tabindex="0"
	on:click={onToggleExpanded}
	on:keydown={onToggleExpanded}
>
	<div class="select__content">
		<span class="select__text">
			{#if selected === null}
				{placeholder}
			{:else}
				{getOptionText(selected)}
			{/if}
		</span>

		{#if direction === 'up'}
			{#if expanded}
				<ChevronDownIcon />
			{:else}
				<ChevronUpIcon />
			{/if}
		{:else if direction === 'down'}
			{#if expanded}
				<ChevronUpIcon />
			{:else}
				<ChevronDownIcon />
			{/if}
		{/if}
	</div>

	{#if expanded}
		<div class="options" style={`${optionsStyle} ${expanded && optionsExpandedStyle}`}>
			{#each values as value, i (i)}
				<div
					class="options__option"
					tabindex={i}
					role="option"
					aria-selected={selected && compare(value, selected)}
					on:click={() => selectOption(value)}
					on:keydown={() => selectOption(value)}
				>
					<div class="options__option__content">
						<span class="options__option__text">
							{getOptionText(value)}
						</span>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	$width: 6rem;
	$height: 2rem;
	$padding: 0 0.5rem;
	$background-color: #212121;

	.select {
		position: relative;
		box-sizing: border-box;
		cursor: pointer;
		user-select: none;
		width: $width;
		height: $height;
		padding: $padding;
		background-color: $background-color;
		border-radius: 0.5rem;
		border: 1px solid white;

		&__content {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: $height;
		}

		&__text {
			width: 100%;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
	}

	.options {
		user-select: none;
		background-color: $background-color;
		position: absolute;
		max-height: calc(6 * $height);
		overflow-y: auto;
		overflow-x: hidden;
		width: $width;
		border-radius: 0.5rem;
		border: 1px solid white;
		box-sizing: border-box;

		&__option {
			user-select: none;
			box-sizing: border-box;
			cursor: pointer;
			width: $width;
			height: $height;
			padding: $padding;

			&__content {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				height: $height;
			}

			&__text {
				width: 100%;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
		}
	}
</style>
