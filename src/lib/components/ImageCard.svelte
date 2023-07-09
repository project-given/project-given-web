<script lang="ts">
	import { fade } from 'svelte/transition';
	import { imagePopup } from '$lib/popups';

	export let images: string[];
	export let title: string;
	export let description: string;

	export let width: number = 300;
	export let height: number = 500;
</script>

<div
	class="group relative flex cursor-pointer flex-col overflow-hidden rounded-lg shadow shadow-black transition-all duration-300 hover:z-10 hover:scale-105"
	style={`width: ${width}px; height: ${height}px;`}
	on:pointerup={() =>
		imagePopup.set({
			urls: images,
			title: title,
			description: description
		})}
>
	<img src={images[0]} alt="..." class="h-3/5 w-full object-cover" />
	<div transition:fade class="flex flex-col justify-between p-6">
		<div class="text-2xl">{title}</div>
		<div class="text-lg text-slate-500">December 20</div>
	</div>
</div>
<!-- class="absolute bottom-0 flex h-20 w-full flex-row items-end justify-start bg-opacity-40 bg-gradient-to-t from-black p-5 pl-7" -->

<!-- <div
	class="group flex h-96 w-[500px] cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow shadow-black"
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
	</div> -->

<!-- <div class="italic text-blue-500">(click to read more)</div> -->
