<script lang="ts">
	import { goto } from '$app/navigation';
	import { clickOutside } from '$lib/clickOutside';
	import { fade, slide } from 'svelte/transition';

	// export let name: string;
	export let urls: {
		url: string;
		name: string;
		description: string;
	}[] = [];
	// export let onClick: Function | undefined;

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

	function handleClickOutside() {
		showUrls = false;
	}
</script>

<!-- <svelte:body on:pointerup={clickOutside} /> -->
<svelte:window bind:innerWidth={windowWidth} />

<div
	transition:fade
	class="group relative flex h-full w-min flex-col items-center justify-center first:mr-auto"
	use:clickOutside={handleClickOutside}
	bind:this={navbarItem}
>
	<div
		class={'h-12 w-12 cursor-pointer transition-all group-hover:scale-110 group-hover:text-blue-500 ' +
			(showUrls ? 'scale-110 text-blue-500' : '')}
		on:cancel={() => (showUrls = false)}
		on:pointerup={() => {
			showUrls = !showUrls;
		}}
	>
		<svg fill="#137ea6" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"
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
			/><rect x="4" y="18" width="18" height="2" /><rect x="4" y="24" width="18" height="2" /><rect
				x="26"
				y="6"
				width="2"
				height="2"
			/><rect x="26" y="12" width="2" height="2" /><rect x="26" y="18" width="2" height="2" /><rect
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

	{#if showUrls && urls.length !== 0}
		<div
			bind:this={urlsElement}
			transition:slide={{ duration: 100 }}
			class="absolute top-14 flex flex-col gap-10 overflow-hidden rounded-lg bg-white p-4 shadow-sm shadow-black"
		>
			{#each urls as { url, name, description }}
				<a
					class="group/url flex min-w-[200px] flex-col"
					href={url}
					on:pointerup={() => {
						showUrls = false;
						goto(url);
					}}
				>
					<div class="whitespace-nowrap text-xl font-bold transition-all group-hover/url:underline">
						{name}
					</div>
					<div class="text-sm">{description}</div>
				</a>
			{/each}
		</div>
		<!-- <div transition:slide class="absolute top-12 h-96 w-96 bg-slate-300" /> -->
	{/if}
</div>
