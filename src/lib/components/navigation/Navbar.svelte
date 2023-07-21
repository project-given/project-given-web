<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import NavbarItem from './NavbarItem.svelte';
	import { links, specialLinks } from './navigation';

	// const specialLinks: {
	// 	text: string,
	// 	links: Link[]
	// }[] = [
	// 	{text: 'Get Involved'},

	// ];

	let width: number = 1;
</script>

<svelte:window bind:innerWidth={width} />

<div
	class={'flex h-12 w-full flex-row items-center bg-white px-12 shadow-lg md:gap-4 lg:gap-8 xl:h-20 xl:gap-12 ' +
		(width <= 850 ? 'justify-between' : 'justify-center')}
>
	<div
		class="-ml-7 scale-60 cursor-pointer transition-all hover:scale-80 lg:scale-75 xl:scale-90 xl:hover:scale-95"
		on:pointerup={() => goto('/')}
	>
		<img class="" src="/icons/projectgiven.webp" alt="..." />
	</div>

	{#if width <= 850}
		<!-- <div>A</div> -->
		<NavbarItem {links}>
			<div class="w-full">
				<NavbarItem text="Get Involved" takeFullWidth isASlot links={specialLinks} />
				<div
					class="mt-8 flex w-full cursor-pointer flex-row justify-center border-4 border-blue-1 py-2 text-xl font-bold transition-all hover:bg-blue-1 hover:text-white"
				>
					DONATE
				</div>
			</div>
		</NavbarItem>
	{:else}
		{#each links as { name, url }}
			<a
				href={url}
				class={'scale-90 transition-all hover:text-blue-0 sm:text-sm md:text-base lg:scale-100 lg:text-base xl:text-xl xl:hover:scale-110 ' +
					($page.url.pathname.includes(url) ? 'font-bold text-blue-0' : '')}
			>
				{name}
			</a>
		{/each}
		<NavbarItem text="Get Involved" links={specialLinks} />

		<a
			class="flex h-full cursor-pointer flex-col justify-center border-4 border-blue-1 transition-all hover:bg-blue-1 hover:text-white md:px-4 md:py-2 lg:h-min xl:hover:font-bold"
			href="/donate"
		>
			DONATE
		</a>
	{/if}
	<!-- {/if} -->
</div>
