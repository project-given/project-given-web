<script lang="ts">
	import { fade } from 'svelte/transition';
	import ShowElement from './ShowElement.svelte';
	import { imagePopup } from '$lib/popups';

	export let images: string[];
	export let title: string;
	export let description: string;

	let hovered: boolean = false;
</script>

<div
	class="group flex h-96 w-[500px] cursor-pointer flex-col bg-white shadow-lg shadow-black"
	on:pointerenter={() => (hovered = true)}
	on:pointerleave={() => (hovered = false)}
	on:pointerup={() => {
		hovered = true;
		imagePopup.set({
			urls: images,
			title: title,
			description: description
		});
	}}
>
	<div class="relative w-full flex-grow overflow-hidden">
		<img
			src={images[0]}
			alt="..."
			class="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
		/>
		{#if hovered}
			<div transition:fade class="absolute top-0 z-10 h-full w-full bg-black p-8 opacity-70">
				<ShowElement delay={200} direction="up">
					<div class="flex flex-col">
						<div class="text-white">{description}</div>
						<!-- <div class="italic text-blue-500">(click to read more)</div> -->
					</div>
				</ShowElement>
			</div>
		{:else}
			<div
				transition:fade
				class="absolute bottom-0 flex h-20 w-full flex-row items-end justify-start bg-opacity-40 bg-gradient-to-t from-black p-5 pl-7"
			>
				<div class="text-lg text-slate-100">{title}</div>
			</div>
		{/if}
	</div>
	<!-- <div class="flex flex-col justify-center p-4">
		<div class="text-xl transition-all">
			{title}
		</div> -->
	<!-- <div class="overflow-hidden text-ellipsis whitespace-nowrap text-slate-500">
			{description}
		</div> -->
	<!-- </div> -->
</div>
