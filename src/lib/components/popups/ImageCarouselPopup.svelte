<script lang="ts">
	import { clickOutside } from '$lib/clickOutside';
	import { imagePopup } from '$lib/popups';
	import { fly } from 'svelte/transition';
	import ImageCarousel from '../ImageCarousel.svelte';
</script>

{#if $imagePopup}
	<div
		class="fixed top-0 z-50 grid h-screen w-screen place-items-center backdrop-blur"
		transition:fly={{ y: -100, duration: 500 }}
	>
		<div
			use:clickOutside={() => imagePopup.set(null)}
			class="flex flex-row rounded bg-amber-50 shadow-2xl"
		>
			<ImageCarousel images={$imagePopup?.urls} width={800} height={600} />
			<div class="flex h-full w-min flex-col gap-8 px-4 py-8">
				<h1 class="text-4xl">{$imagePopup?.title}</h1>
				<div class="w-96 text-xl">{$imagePopup?.description}</div>
			</div>
		</div>
	</div>
{/if}
