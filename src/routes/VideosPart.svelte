<script lang="ts">
	import ShowElement from '$lib/components/ShowElement.svelte';
	import '@justinribeiro/lite-youtube';

	// const links: string[] = ['vZCYYDSyFJs', 'V6PGQHT1gTU', '0NdEtMfItY0', 'pQ39qnslU5A'];
	const videos: { id: string; about: string }[] = [
		{ id: 'vZCYYDSyFJs', about: 'Medical Mission Baguio' },
		{ id: 'V6PGQHT1gTU', about: 'Making Food for the homeless at Operation Nightwatch, Seattle' },
		{ id: '0NdEtMfItY0', about: 'English Camp, Hong-cheon' },
		{ id: 'JsiF0CgupAs', about: 'How to Brush Teeth!' }
	];
</script>

<div class="flex w-full flex-row justify-center">
	<div class="flex flex-col items-center p-8">
		<ShowElement direction="fade">
			<div class="pb-4 text-7xl">LATEST NEWS</div>
		</ShowElement>

		<div class="flex flex-row flex-wrap justify-center gap-4">
			{#each videos as { id, about }, i}
				<ShowElement direction="up" delay={200} speed="slow">
					<div class="flex w-min flex-col">
						<div class="h-[315px] w-[560px]">
							<lite-youtube videoid={id} />
						</div>

						<div class="pb-4 pt-1 text-lg">
							{about}
						</div>
					</div>
				</ShowElement>
			{/each}
		</div>
	</div>
</div>
