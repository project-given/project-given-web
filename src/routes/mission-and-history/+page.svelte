<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import { firestore } from '$lib/firebase';
	import { getDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let title: string = '';
	let description: string = '';

	onMount(async () => {
		const educationInfo = (await getDoc(firestore.missionAndHistoryInfoDoc)).data()!;
		title = educationInfo.title;
		description = educationInfo.description;
	});
</script>

<!-- <div class="flex w-full flex-col items-center">
	<div class="flex w-full flex-col items-center bg-blue-2 p-12 text-white">
		<div class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl">{title}</div>
		<div class="h-4 md:h-6" />
		<div class="max-w-6xl text-base md:text-lg lg:text-2xl">{description}</div>
	</div>
</div> -->

<Heading {title} description="" />

<div class="h-16" />

<div class="flex w-full flex-col items-center px-8">
	<div class="max-w-4xl text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl">
		{description}
	</div>
</div>

<div class="h-16" />
