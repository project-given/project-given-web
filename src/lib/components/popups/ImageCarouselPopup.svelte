<script lang="ts">
	import { clickOutside } from '$lib/clickOutside';
	import { imagePopup } from '$lib/popups';
	import { fly } from 'svelte/transition';
	import ImageCarousel from '../ImageCarousel.svelte';
</script>

{#if $imagePopup}
	<div
		class="fixed top-0 z-50 grid h-full w-full place-items-center backdrop-blur sm:p-8 md:p-16 lg:p-24 xl:p-28"
		transition:fly={{ y: -100, duration: 500 }}
	>
		<div
			use:clickOutside={() => imagePopup.set(null)}
			class="relative flex h-full w-full flex-col overflow-hidden bg-white shadow-2xl shadow-black sm:rounded-2xl md:flex-row"
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
			<div
				class="absolute inset-x-0 top-0 flex h-16 flex-row justify-end bg-gradient-to-b from-black to-transparent"
			>
				<div
					class="m-3 h-5 w-5 cursor-pointer text-center sm:opacity-0"
					on:pointerup={() => imagePopup.set(null)}
				>
					<!-- height="px"
						width="800px" -->
					<svg
						fill="#ffffff"
						version="1.1"
						id="Capa_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 460.775 460.775"
						xml:space="preserve"
					>
						<path
							d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
						c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
						c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
						c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
						l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
						c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
{/if}
