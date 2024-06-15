<script lang="ts">
	import ShowElement from '$lib/components/ShowElement.svelte';
	import { firestore } from '$lib/firebase';
	import '@justinribeiro/lite-youtube';
	import { getDocs, orderBy, query } from 'firebase/firestore';
	import { onMount } from 'svelte';

	// const links: string[] = ['vZCYYDSyFJs', 'V6PGQHT1gTU', '0NdEtMfItY0', 'pQ39qnslU5A'];
	const videos: { id: string; about: string }[] = [
		// { id: 'vZCYYDSyFJs', about: 'Medical Mission Baguio' },
		// { id: 'V6PGQHT1gTU', about: 'Making Food for the homeless at Operation Nightwatch, Seattle' },
		// { id: '0NdEtMfItY0', about: 'English Camp, Hong-cheon' },
		// { id: 'JsiF0CgupAs', about: 'How to Brush Teeth!' }
	];

	onMount(async () => {
		const vids = await getDocs(query(firestore.youtubeCollection, orderBy('createdAt', 'desc')));
		vids.forEach((vid) => {
			const data = vid.data()!;
			videos.push({ id: data.id, about: data.title });
			const last = videos.length - 1;
			videos[last] = videos[last];
		});
	});
</script>

<div class="flex w-full flex-row justify-center">
	<div class="flex flex-col items-center p-8">
		<div class="flex flex-row flex-wrap justify-center gap-4">
			{#each videos as { id, about }, i}
				<ShowElement direction="up" delay={200} speed="slow">
					<div class="flex w-min flex-col">
						<div
							class="h-[140px] w-[250px] overflow-hidden rounded-lg shadow-sm shadow-black sm:h-[200px] sm:w-[380px] lg:h-[250px] lg:w-[450px] xl:h-[315px] xl:w-[560px]"
						>
							<lite-youtube videoid={id} />
						</div>

						<div class="pb-4 pt-1 text-base">
							{about}
						</div>
					</div>
				</ShowElement>
			{/each}
		</div>
	</div>
</div>
