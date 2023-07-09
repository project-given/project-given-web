<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import ShowElement from '../ShowElement.svelte';
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

	export let height: number = -1;
	export let width: number = -1;
	export let moving: { stop: boolean } = { stop: false };

	let hovered: boolean = false;
	$: moving.stop = hovered;
	let dimensions: string = '';
	if (height !== -1) dimensions += `height: ${height}px;`;
	if (width !== -1) dimensions += `width: ${width}px;`;

	let imageSrc: string = '';
	onMount(async () => {
		// console.log(imageSrc);
		// console.log(imagesRef);
		// console.log(firstImage);
		// console.log(ref(imagesRef, firstImage));
		imageSrc = await getDownloadURL(ref(imagesRef, firstImage));
	});

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

<div
	class="group relative cursor-pointer overflow-hidden"
	style={dimensions}
	on:pointerenter={() => (hovered = true)}
	on:pointerleave={() => (hovered = false)}
	on:pointerup={() => {
		hovered = true;
		imagePopup.set({ urls: [imageSrc], title: title, description: description });
		getRestOfImages();
		// setImagePopupParameters({ url: url, title: title, description: description });
	}}
>
	<img
		src={imageSrc}
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
