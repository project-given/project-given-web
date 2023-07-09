<script lang="ts">
	import ShowElement from '$lib/components/ShowElement.svelte';
	import Numbers from '../lib/components/default/Numbers.svelte';

	const numberVars: { num: number; suffix: string; about: string }[] = [
		{ num: 15, suffix: 'K', about: 'hours contributed' },
		{ num: 650, suffix: '+', about: 'youth impacted worldwide' },
		{ num: 50, suffix: '+', about: 'missions' },
		{ num: 25, suffix: '+', about: 'locations across 10 countries' }
	];
</script>

<div class="relative flex w-full flex-col items-center gap-8 py-40">
	<div class="z-10 mt-28 flex w-min flex-col gap-2">
		<ShowElement delay={200} direction="up">
			<div class="whitespace-nowrap p-2 text-3xl">we have over</div>
		</ShowElement>

		<ShowElement delay={400} direction="right">
			<div class="h-1 w-full bg-red-500" />
		</ShowElement>
	</div>

	<!-- Actual numbers -->
	<div class="z-10 flex flex-row justify-center gap-32">
		{#each numberVars as { num, suffix, about }, i}
			<ShowElement delay={200 + i * 300} direction="up" speed="slow">
				<Numbers {num} {suffix} {about} delay={200 + i * 250} />
			</ShowElement>
		{/each}
	</div>
	<!-- Number description -->

	<!-- Map -->
	<div class="absolute opacity-30">
		<ShowElement delay={200} direction="fade" speed="slow">
			<div class="relative h-[600px] w-[1200px] overflow-hidden">
				<!-- class="w-[1200px]" -->
				<img
					class="absolute -bottom-20 h-full w-full"
					src="https://static.wixstatic.com/media/6cb50f_6fc66a6feecc4b4c9f1fe780e0dabc23~mv2.png/v1/fill/w_844,h_469,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/World_map_blank_without_borders_svg%20(2).png"
					alt="map"
				/>
			</div>
		</ShowElement>
	</div>

	<!-- Text -->
</div>
