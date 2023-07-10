<script lang="ts">
	import ImagesGallery from '$lib/components/default/ImagesGallery.svelte';
	import { firestore, storage } from '$lib/firebase';
	import { getDoc, getDocs, limit, orderBy, query } from 'firebase/firestore';
	import { ref, type StorageReference } from 'firebase/storage';
	import { onMount } from 'svelte';

	let images: {
		title: string;
		description: string;
		firstImage: string;
		imagesRef: StorageReference;
	}[] = [];

	onMount(async () => {
		const col = (a: any) => getDocs(query(a, orderBy('createdAt', 'desc'), limit(3)));
		const [edu, hel] = await Promise.all([
			col(firestore.projectEducationCollection),
			col(firestore.projectHealthCollection)
		]);

		edu.forEach((item) => {
			const data = item.data()! as any;
			const id = item.id;

			images.push({
				title: data.title,
				description: data.description,
				firstImage: data.firstImage,
				imagesRef: ref(storage.projectEducation, id)
			});

			const last = images.length - 1;
			images[last] = images[last];
		});

		hel.forEach((item) => {
			const data = item.data()! as any;
			const id = item.id;

			images.push({
				title: data.title,
				description: data.description,
				firstImage: data.firstImage,
				imagesRef: ref(storage.projectHealth, id)
			});

			const last = images.length - 1;
			images[last] = images[last];
		});
	});
</script>

<!-- <div class="flex flex-row overflow-hidden">
	{#each projectHealthImages as { url, description, title }}
		<div style={`width: ${width}px; height: ${width}px;`}>
			{#if width !== 0}
				<ImageInfo {url} {description} {title} {width} height={width} />
			{/if}
		</div>
	{/each}
</div> -->
<!-- <div class="p-12 text-6xl">PROJECT HEALTH</div> -->
<!-- <ImagesGallery images={projectHealthImages} imageHeight={500} imageWidth={500} /> -->

<!-- <div class="h-40" /> -->

<div class="shadow shadow-black">
	<ImagesGallery bind:images />
</div>
