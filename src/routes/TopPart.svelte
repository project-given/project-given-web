<script lang="ts">
	import ShowElement from '$lib/components/ShowElement.svelte';
	import { fade } from 'svelte/transition';

	let scrollY: number = 0;
</script>

<svelte:window bind:scrollY />

<img
	class="fixed -z-10 h-[880px] w-screen overflow-clip"
	src="https://images.unsplash.com/photo-1496661274775-a86a124b9df3?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4ODU2MTczN3w&ixlib=rb-4.0.3&q=85&w=1920"
	alt="not AVAILABLE"
/>

<div class="flex h-[880px] w-screen flex-col justify-center gap-4 px-24">
	<ShowElement speed="slow" direction="fade" delay={300}>
		<div class="text-8xl font-bold text-amber-50">PROJECT GIVEN</div>
	</ShowElement>

	<ShowElement speed="slow" direction="fade" delay={300}>
		<div class="max-w-6xl text-3xl font-bold text-amber-100">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit.
		</div>
	</ShowElement>
</div>

{#if scrollY === 0}
	<ShowElement speed="slow" direction="fade" delay={800}>
		<div transition:fade class="absolute bottom-0 flex w-screen flex-col items-center">
			<div class="my-4 h-6 w-6 animate-bounce bg-black" />
		</div>
	</ShowElement>
{/if}
