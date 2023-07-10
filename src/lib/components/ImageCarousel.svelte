<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	// export let width: number;
	// export let height: number;
	export let images: string[];
	export let automaticMove: boolean = true;

	let imagesContainer: HTMLElement;
	let parent: HTMLElement;
	let currentItem: number = 0;

	$: if (imagesContainer)
		imagesContainer.style.left = `${
			-1 * currentItem * (imagesContainer.scrollWidth / images.length)
		}px`;
	function setCurrent(i: number) {
		if (i < 0) currentItem = images.length - 1;
		else if (i === images.length) currentItem = 0;
		else currentItem = i;
	}

	let dimensions: string = '';
	onMount(async () => {
		const b = parent.getBoundingClientRect();
		dimensions = `width: ${b.width}px; height: ${b.height}px`;
		console.log(dimensions);

		if (!automaticMove) return;

		let lastItem = currentItem;
		while (true) {
			if (!imagesContainer) break;

			// Wait, and reset counter if user just clicked
			for (let i = 0; i < 10; i++) {
				await new Promise((r) => setTimeout(r, 200));
				if (lastItem !== currentItem) {
					lastItem = currentItem;
					i = 0;
				}
			}

			setCurrent(currentItem + 1);
		}
	});
</script>

<!-- <div class="relative overflow-hidden" style={`width: ${width}px; height: ${height}px;`}>
	<div bind:this={imagesContainer} class="absolute top-0 flex flex-row transition-all duration-500">
		{#each images as image, i}
			<div style={`width: ${width}px; height: ${height}px;`}> -->

<div bind:this={parent} class="relative h-full w-full overflow-hidden">
	<div
		bind:this={imagesContainer}
		class="absolute top-0 flex h-full flex-row transition-all duration-500"
	>
		{#each images as image, i}
			<div style={dimensions} class="">
				<img
					style={dimensions}
					id={`${i}`}
					class="bg-black bg-center object-cover"
					src={image}
					alt="..."
				/>
			</div>
		{/each}
	</div>
	<div class="absolute bottom-5 w-full">
		<div class="flex flex-row items-center justify-center gap-4">
			{#each images as _, i}
				<div
					class={'h-2 w-2 cursor-pointer rounded-full bg-slate-400 opacity-80 transition-all ' +
						(i === currentItem ? 'scale-150 bg-white ' : ' ')}
					on:pointerup={() => setCurrent(i)}
				/>
			{/each}
		</div>
	</div>
	{#each ['left-8', 'right-8'] as d}
		<div transition:fade class={'group absolute flex h-full flex-col justify-center ' + d}>
			<div
				class="h-5 w-5 cursor-pointer rounded-full border-2 border-slate-500 bg-slate-300 opacity-80 shadow-2xl transition-all hover:scale-125 hover:opacity-100"
				on:pointerup={() => setCurrent(d === 'left-8' ? currentItem - 1 : currentItem + 1)}
			/>
		</div>
	{/each}
</div>
