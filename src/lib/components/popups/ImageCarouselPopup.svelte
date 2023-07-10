<script lang="ts">
	import { clickOutside } from '$lib/clickOutside';
	import { imagePopup } from '$lib/popups';
	import { fly } from 'svelte/transition';
	import ImageCarousel from '../ImageCarousel.svelte';
</script>

{#if $imagePopup}
	<div
		class="fixed top-0 z-50 grid h-full w-full place-items-center p-8 backdrop-blur md:p-16 lg:p-24 xl:p-28"
		transition:fly={{ y: -100, duration: 500 }}
	>
		<div
			use:clickOutside={() => imagePopup.set(null)}
			class="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black md:flex-row"
		>
			<!-- <ImageCarousel images={$imagePopup?.urls} width={800} height={600} /> -->
			<div class="h-full w-full">
				<ImageCarousel images={$imagePopup?.urls} />
			</div>
			<div class="h-full overflow-y-auto">
				<div class="flex max-w-xl flex-col justify-center gap-6 overflow-y-auto p-12">
					<div class="text-2xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
						{$imagePopup?.title}
					</div>
					<div class="my-2 h-2 w-16 bg-blue-1 md:my-4 xl:my-6" />
					<div class="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl">
						{$imagePopup?.description}
					</div>
					<div class="text-end text-lg text-slate-500">{$imagePopup?.createdAt}</div>
				</div>
			</div>
		</div>
	</div>
{/if}
