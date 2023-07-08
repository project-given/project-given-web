<script lang="ts">
	import { onMount } from 'svelte';

	export let direction: 'left' | 'right' = 'right';
	export let itemWidth: number = 1200;
	export let itemHeight: number = 400;
	export let itemTop: number = 100;

	let scrollY = 0;
	let width = 0;
	let height = 0;
	let about: HTMLDivElement;

	let top = 0;
	onMount(() => (top = about.getBoundingClientRect().top));

	let offset: number = -4000;
	$: offset = getOffset(scrollY);

	let offsetStyle: string = '';
	$: offsetStyle = direction === 'right' ? `left: ${offset}px` : `right: ${offset}px`;

	let fakeOffset: number = offset;
	function getOffset(scroll: number): number {
		let num = (scroll + height - top - itemWidth) * 2;
		fakeOffset = num;

		if (fakeOffset > 150 && fakeOffset < width) {
			return offset;
		}

		return num;
	}
</script>

<svelte:window bind:scrollY bind:innerWidth={width} bind:outerHeight={height} />

<div bind:this={about}>
	<div
		class="fixed"
		style={`width: ${itemWidth}px; height: ${itemHeight}px; top: ${itemTop}px; ${offsetStyle}; `}
	>
		<slot />
	</div>
</div>
