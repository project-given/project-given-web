<script lang="ts">
	import ShowElement from '$lib/components/ShowElement.svelte';
	import { fade } from 'svelte/transition';

	let scrollY: number = 0;
</script>

<svelte:window bind:scrollY />

<div class="flex h-screen flex-col">
	<div class="relative flex-grow">
		<img
			class="fixed -z-10 h-full w-full overflow-clip object-cover"
			src="/projectgivenfront.jpg"
			alt="..."
		/>

		<div
			class="absolute bottom-0 flex w-full flex-col justify-center gap-4 bg-gradient-to-t from-black to-transparent p-8 md:px-20 md:py-28 md:pt-40"
		>
			<ShowElement speed="slow" direction="fade" delay={300}>
				<div class="text-4xl font-bold text-green-4 sm:text-6xl">Project Given</div>
			</ShowElement>

			<ShowElement speed="slow" direction="fade" delay={300}>
				<div class="max-w-6xl font-bold text-green-2 sm:text-lg">
					Humanitarian Aid for Healthcare and Education
				</div>
			</ShowElement>
		</div>
	</div>
	<div class="h-32 bg-white">
		{#if scrollY === 0}
			<ShowElement speed="slow" direction="fade" delay={800}>
				<div transition:fade class="absolute bottom-0 flex w-full flex-col items-center">
					<div class="my-4 h-6 w-6 animate-bounce rounded-full bg-blue-1" />
				</div>
			</ShowElement>
		{/if}
	</div>
</div>
