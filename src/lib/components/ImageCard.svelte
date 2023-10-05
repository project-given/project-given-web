<script lang="ts">
	import { fade } from 'svelte/transition';
	import { imagePopup } from '$lib/popups';
	import {
		getDownloadURL,
		getMetadata,
		listAll,
		ref,
		type StorageReference
	} from 'firebase/storage';
	import { onMount } from 'svelte';

	export let firstImage: string;
	export let imagesRef: StorageReference;

	export let title: string;
	export let description: string;
	export let createdAt: string;

	// export let width: number = 300;
	// export let height: number = 500;

	let imageSrc: string = '';
	onMount(async () => (imageSrc = await getDownloadURL(ref(imagesRef, firstImage))));

	async function getRestOfImages() {
		const allImages = await listAll(imagesRef);
		allImages.items.forEach(async (item) => {
			const metadata = await getMetadata(item);
			if (metadata.name === firstImage) return;

			const url = await getDownloadURL(item);
			imagePopup.update((ip) => {
				if (!ip) return ip;
				ip!['urls'].push(url);
				return ip;
			});
		});
	}
</script>

<!-- style={`width: ${width}px; height: ${height}px;`} -->
<div
	class="min-h-[500px] max-w-[450px] cursor-pointer overflow-hidden rounded-lg shadow shadow-black transition-all duration-300 hover:z-10 hover:scale-105"
	on:pointerup={() => {
		imagePopup.set({
			urls: [imageSrc],
			title: title,
			description: description,
			createdAt: createdAt
		});
		getRestOfImages();
	}}
>
	<div class="group relative flex h-full w-full flex-col">
		<img src={imageSrc} alt={title} class="h-[300px] w-full object-cover" />
		<div transition:fade class="flex min-h-[200px] flex-col justify-between p-6">
			<div class="text-2xl text-blue-0">{title}</div>
			<div class="text-end text-lg text-slate-500">{createdAt}</div>
		</div>
	</div>
</div>
<!-- class="absolute bottom-0 flex h-20 w-full flex-row items-end justify-start bg-opacity-40 bg-gradient-to-t from-black p-5 pl-7" -->

<!-- <div .
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
