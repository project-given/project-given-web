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
			class="flex flex-row overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black"
		>
			<ImageCarousel images={$imagePopup?.urls} width={800} height={600} />
			<div class="flex h-full max-w-xl flex-col justify-center gap-6 p-12">
				<div class="text-6xl">{$imagePopup?.title}</div>
				<div class="my-6 h-2 w-16 bg-blue-800" />
				<div class="text-2xl">
					{$imagePopup?.description}
				</div>
			</div>
		</div>
	</div>
{/if}
