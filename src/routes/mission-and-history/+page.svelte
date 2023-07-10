<script lang="ts">
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

<div class="flex w-full flex-col items-center p-8">
	<div class="text-8xl">{title}</div>
	<div class="h-4" />
	<div class="max-w-4xl">{description}</div>
</div>
