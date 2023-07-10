<script lang="ts">
	import { clickOutside } from '$lib/clickOutside';
	import { fade, slide } from 'svelte/transition';

	export let name: string;
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
		class={'cursor-pointer select-none whitespace-nowrap text-lg font-bold transition-all group-hover:scale-110 group-hover:text-blue-500 ' +
			(showUrls ? 'scale-110 text-blue-500' : '')}
		on:cancel={() => (showUrls = false)}
		on:pointerup={() => {
			showUrls = !showUrls;
			// if (onClick) {
			// 	onClick();
			// 	showUrls = false;
			// }
		}}
	>
		{name}
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
					on:pointerup={() => (showUrls = false)}
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
