<script lang="ts">
	import ImageCard from '$lib/components/ImageCard.svelte';
	import { firestore, storage } from '$lib/firebase';
	import { getDate } from '$lib/utility';
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
		createdAt: string;
	}[] = [];

	let title: string = '';
	let description: string = '';

	onMount(() => {
		(async () => {
			const educationInfo = (await getDoc(firestore.projectEducationInfoDoc)).data()!;
			title = educationInfo.title;
			description = educationInfo.description;
		})();

		(async () => {
			const education = await getDocs(
				query(firestore.projectEducationCollection, orderBy('createdAt', 'desc'))
			);
			education.forEach((item) => {
				const data = item.data();

				images.push({
					title: data.title,
					description: data.description,
					firstImage: data.firstImage,
					imagesRef: ref(storage.projectEducation, item.id),
					createdAt: getDate(data.createdAt.toDate())
				});

				const last = images.length - 1;
				images[last] = images[last];
			});
		})();
	});
</script>

<div class="flex w-full flex-col items-center">
	<div class="flex w-full flex-col items-center bg-blue-2 py-12 text-white">
		<div class="text-8xl">{title}</div>
		<!-- <div class="text-8xl">PROJECT HEALTH</div> -->
		<div class="h-6" />
		<div class="max-w-6xl text-2xl">{description}</div>
	</div>
	<div class="h-16" />
	<div class="flex w-full flex-row flex-wrap justify-center gap-10 px-12">
		{#each images as { title, description, firstImage, imagesRef, createdAt }}
			<ImageCard {title} {description} {firstImage} {imagesRef} {createdAt} />
		{/each}
	</div>
</div>
<div class="h-16" />
