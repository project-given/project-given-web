<script lang="ts">
	import ShowElement from '$lib/components/ShowElement.svelte';
	import Numbers from '../lib/components/default/Numbers.svelte';

	const numberVars: { num: number; suffix: string; about: string }[] = [
		{ num: 650, suffix: '+', about: 'youth impacted worldwide' },
		{ num: 50, suffix: '+', about: 'missions' },
		{ num: 25, suffix: '+', about: 'locations across 10 countries' },
		{ num: 15, suffix: 'K', about: 'hours contributed' }
	];
</script>

<div class="relative flex w-full flex-col items-center gap-8">
	<div class="z-10 mt-5 flex w-min flex-col gap-2 md:mt-12 lg:mt-28">
		<ShowElement delay={200} direction="up">
			<div class="whitespace-nowrap p-2 text-3xl sm:text-xl lg:text-3xl">we have over</div>
		</ShowElement>

		<ShowElement delay={400} direction="right">
			<div class="h-1 w-full bg-blue-2" />
		</ShowElement>
	</div>

	<!-- Actual numbers -->
	<div
		class="z-10 flex w-full flex-col items-center justify-center gap-5 px-28 sm:flex-row sm:items-start lg:gap-8 xl:gap-28"
	>
		{#each numberVars as { num, suffix, about }, i}
			<ShowElement delay={200 + i * 300} direction="up" speed="slow">
				<Numbers {num} {suffix} {about} delay={200 + i * 250} />
			</ShowElement>
		{/each}
	</div>
	<!-- Number description -->

	<!-- Map -->
	<div class="absolute h-full w-full opacity-0 sm:opacity-30">
		<ShowElement delay={200} direction="fade" speed="slow">
			<img class="h-full w-full object-cover" src="/map.webp" alt="map" />
		</ShowElement>
	</div>

	<!-- Text -->
</div>
