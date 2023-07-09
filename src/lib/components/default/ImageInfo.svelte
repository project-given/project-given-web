<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import ShowElement from '../ShowElement.svelte';
	import { imagePopup } from '$lib/popups';
	// import { setImagePopupParameters, showImagePopup } from '$lib/popups';

	export let url: string;
	export let title: string;
	export let description: string;
	export let height: number = -1;
	export let width: number = -1;

	export let moving: { stop: boolean } = { stop: false };

	let hovered: boolean = false;
	$: moving.stop = hovered;

	let dimensions: string = '';
	if (height !== -1) dimensions += `height: ${height}px;`;
	if (width !== -1) dimensions += `width: ${width}px;`;
</script>

<div
	class="group relative cursor-pointer overflow-hidden"
	style={dimensions}
	on:pointerenter={() => (hovered = true)}
	on:pointerleave={() => (hovered = false)}
	on:pointerup={() => {
		hovered = true;
		imagePopup.set({ urls: [url], title: title, description: description });
		// setImagePopupParameters({ url: url, title: title, description: description });
	}}
>
	<img
		src={url}
		alt={title}
		style={dimensions}
		class="object-cover transition-transform duration-700 group-hover:scale-110"
	/>
	{#if hovered}
		<div transition:fade class="absolute top-0 z-10 h-full w-full bg-black p-8 opacity-70">
			<ShowElement delay={200} direction="up">
				<div class="text-6xl text-white">{title}</div>
			</ShowElement>
		</div>
	{/if}
</div>
