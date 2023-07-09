<script lang="ts">
	import { onMount } from 'svelte';
	import ImageInfo from './ImageInfo.svelte';
	import { imagePopup } from '$lib/popups';
	import type { StorageReference } from 'firebase/storage';

	export let images: {
		firstImage: string;
		imagesRef: StorageReference;
		description: string;
		title: string;
	}[];
	export let imageHeight: number = 300;
	export let imageWidth: number = 300;

	let container: HTMLElement;
	let moving = { stop: false };

	onMount(async () => {
		let left: number = -container.scrollWidth / 2;

		while (true) {
			await new Promise((r) => setTimeout(r, 10));
			if (!container) break;
			if (moving.stop || $imagePopup) continue;
			container.style.left = left + 'px';
			left += 1;
			if (left >= 0) left = -container.scrollWidth / 2;
		}
	});
</script>

<div class="relative overflow-hidden" style={`height: ${imageHeight}px;`}>
	<div bind:this={container} class="absolute flex flex-row items-center justify-start">
		<!-- {#each [0, 1] as _} -->
		{#each images as { firstImage, imagesRef, description, title }}
			<ImageInfo
				{firstImage}
				{imagesRef}
				{description}
				{title}
				height={imageHeight}
				width={imageWidth}
				{moving}
			/>
		{/each}
		{#each images as { firstImage, imagesRef, description, title }}
			<ImageInfo
				{firstImage}
				{imagesRef}
				{description}
				{title}
				height={imageHeight}
				width={imageWidth}
				{moving}
			/>
		{/each}
		<!-- {/each} -->
	</div>
</div>

<!-- {#if $showImagePopup}
	<div
		class="fixed top-0 z-50 grid h-screen w-screen place-items-center backdrop-blur"
		transition:fly={{ y: -100, duration: 500 }}
		on:pointerup={() => showImagePopup.set(false)}
	>
		<div class="flex flex-col border-4 border-black bg-amber-50 p-4 shadow-2xl">
			<h1 class="text-6xl">{imagePopupParameters.title}</h1>
			<img
				class="max-w-4xl object-cover"
				src={imagePopupParameters.url}
				alt={imagePopupParameters.title}
			/>
			<div class="text-xl">{imagePopupParameters.description}</div>
		</div>
	</div>
{/if} -->
