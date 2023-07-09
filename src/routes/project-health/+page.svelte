<script lang="ts">
	import ImageCard from '$lib/components/ImageCard.svelte';
	import { firestore, storage } from '$lib/firebase';
	import { getDoc, getDocs, orderBy, query } from 'firebase/firestore';
	import { ref, type StorageReference } from 'firebase/storage';
	import { onMount } from 'svelte';

	const width = 400;
	const height = 500;

	let images: {
		title: string;
		description: string;
		firstImage: string;
		imagesRef: StorageReference;
	}[] = [];

	let title: string = '';
	let description: string = '';

	onMount(() => {
		(async () => {
			const healthInfo = (await getDoc(firestore.projectHealthInfoDoc)).data()!;
			title = healthInfo.title;
			description = healthInfo.description;
		})();

		(async () => {
			const health = await getDocs(
				query(firestore.projectHealthCollection, orderBy('createdAt', 'desc'))
			);
			health.forEach((item) => {
				const data = item.data();

				images.push({
					title: data.title,
					description: data.description,
					firstImage: data.firstImage,
					imagesRef: ref(storage.projectHealth, item.id)
				});

				const last = images.length - 1;
				images[last] = images[last];
			});
		})();
	});
</script>

<div class="flex w-full flex-col items-center p-8">
	<div class="text-8xl">{title}</div>
	<div class="h-4" />
	<div class="max-w-4xl">{description}</div>
	<div class="h-16" />
	<div class="flex w-full flex-row flex-wrap justify-center gap-10 px-12">
		{#each images as { title, description, firstImage, imagesRef }}
			<ImageCard {title} {description} {firstImage} {imagesRef} />
		{/each}
		<!-- {#each about as { title, description }, i}
			<ImageCard {images} {description} {title} {width} {height} />
		{/each} -->
	</div>
</div>
