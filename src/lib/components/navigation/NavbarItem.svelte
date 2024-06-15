<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { clickOutside } from '$lib/clickOutside';
	import { fade, slide } from 'svelte/transition';
	import type { Link } from './navigation';

	export let text: string = '';
	export let takeFullWidth: boolean = false;
	export let isASlot: boolean = false;
	export let links: Link[] = [];

	let highlightedLinks: boolean[] = [];
	let highlightItem: boolean = false;
	$: {
		let temp: boolean[] = [];
		links.map((l) => temp.push($page.url.pathname.includes(l['url'])));
		highlightedLinks = temp;
	}
	$: highlightItem = highlightedLinks.some((l) => l);

	const hideUrls = () => (showUrls = false);
	$: $page, hideUrls();

	let showUrls: boolean = false;
	let navbarItem: HTMLElement;

	let urlsElement: HTMLElement;
	let windowWidth: number = 0;

	$: if (showUrls && urlsElement) {
		if (windowWidth - urlsElement.getBoundingClientRect().right < 8) {
			const extraRight = windowWidth - navbarItem.getBoundingClientRect().right;
			urlsElement.style.right = -extraRight + 8 + 'px';
		}
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
	transition:fade
	class={'group relative flex h-full select-none flex-col items-center justify-center first:mr-auto ' +
		(takeFullWidth ? 'w-full' : 'w-fit')}
	use:clickOutside={() => (showUrls = false)}
	bind:this={navbarItem}
>
	<div
		class="w-full cursor-pointer"
		on:cancel={() => (showUrls = false)}
		on:pointerup={() => (showUrls = !showUrls)}
	>
		{#if text}
			<div
				class={'group/text flex w-full flex-row text-xl transition-all hover:fill-blue-0 hover:text-blue-0 ' +
					(showUrls || highlightItem ? 'text-blue-0 ' : ' ') +
					(isASlot ? ' ' : 'xl:hover:scale-110 ')}
			>
				<!-- scale-90 transition-all hover:text-blue-0 sm:text-sm md:text-base lg:scale-100 lg:text-base xl:text-xl xl:hover:scale-110 -->
				{#if isASlot}
					<div class="flex-grow">
						{text}
					</div>
				{:else}
					<div class="flex-grow scale-90 transition-all sm:text-sm md:text-base lg:scale-100">
						{text}
					</div>
				{/if}
				<!-- fill="#000000" -->
				<!-- height="800px"
					width="800px" -->
				<svg
					class={'ml-2 w-6 fill-black transition-all group-hover/text:fill-blue-0 ' +
						(showUrls || highlightItem ? 'rotate-180 fill-blue-0' : '')}
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 330 330"
					xml:space="preserve"
				>
					<path
						id="XMLID_93_"
						d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
	l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
	C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
					/>
				</svg>
			</div>
			<!-- {#if isASlot}

				<div
					class={'flex w-full flex-row justify-center border-4 border-blue-1 py-2 text-xl font-bold transition-all hover:bg-blue-1 hover:text-white ' +
						(showUrls || highlightItem ? 'scalle-110 bg-blue-1 text-white' : '')}
				>
					{text}
				</div>
			{:else}
				<div
					class={'scale-90 transition-all hover:text-blue-0 sm:text-sm md:text-base lg:scale-100 lg:text-base xl:text-xl xl:hover:scale-110 ' +
						(showUrls || highlightItem ? 'text-blue-0' : '')}
				>
					{text}
				</div>
			{/if} -->
		{:else}
			<div
				class={'h-12 w-12 transition-all group-hover:scale-110 ' + (showUrls ? 'scale-110' : '')}
			>
				<svg class="fill-blue-2" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"
					><defs
						><style>
							.cls-1 {
								fill: none;
							}
						</style></defs
					><title>table-of-contents</title><rect x="4" y="6" width="18" height="2" /><rect
						x="4"
						y="12"
						width="18"
						height="2"
					/><rect x="4" y="18" width="18" height="2" /><rect
						x="4"
						y="24"
						width="18"
						height="2"
					/><rect x="26" y="6" width="2" height="2" /><rect
						x="26"
						y="12"
						width="2"
						height="2"
					/><rect x="26" y="18" width="2" height="2" /><rect
						x="26"
						y="24"
						width="2"
						height="2"
					/><rect
						id="_Transparent_Rectangle_"
						data-name="&lt;Transparent Rectangle&gt;"
						class="cls-1"
						width="32"
						height="32"
					/></svg
				>
				<!-- {name} -->
			</div>
		{/if}
	</div>

	{#if showUrls && links.length !== 0}
		<div
			bind:this={urlsElement}
			transition:slide={{ duration: 100 }}
			class={'absolute flex flex-col gap-10 overflow-visible  bg-white p-4 shadow-sm shadow-gray-400 md:top-12 xl:top-20 ' +
				(isASlot ? 'top-12' : 'top-14')}
		>
			{#each links as { url, name, description }, i}
				<a
					class="group/url flex min-w-[200px] flex-col transition-all hover:translate-x-1 hover:text-blue-1"
					href={url}
					on:pointerup={() => {
						showUrls = false;
						goto(url);
					}}
				>
					<div
						class={'whitespace-nowrap text-base font-bold transition-all  ' +
							(highlightedLinks[i] ? 'text-blue-1' : '')}
					>
						{name}
					</div>
					<div class="text-sm">{description}</div>
				</a>
			{/each}

			<slot />
		</div>
	{/if}
</div>
