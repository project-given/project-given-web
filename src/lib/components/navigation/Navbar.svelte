<script lang="ts">
	import { goto } from '$app/navigation';
	import { screenUnit } from '$lib/screenUnit';
	import { page } from '$app/stores';
	import NavbarItem from './NavbarItem.svelte';

	const links: { name: string; url: string; description: string }[] = [
		{ name: 'Project Health', url: '/project-health', description: 'On medical help and food' },
		{ name: 'Project Education', url: '/project-education', description: 'On education' },
		{
			name: 'Mission and History',
			url: '/mission-and-history',
			description: 'Who we are, and what we want to do'
		}
	];

	let scrollY: number = 0;
	let height: number = 1;
	let width: number = 1;

	$: console.log(width);
	$: screenUnit.set(scrollY / height);
</script>

<svelte:window bind:scrollY bind:innerHeight={height} bind:innerWidth={width} />

<div
	class={'flex h-12 w-full flex-row items-center bg-white px-12 shadow-lg md:gap-4 lg:gap-8 xl:h-20 xl:gap-12 ' +
		(width <= 850 ? 'justify-between' : 'justify-center')}
>
	<div
		class="-ml-7 scale-60 cursor-pointer transition-all hover:scale-80 lg:scale-75 xl:scale-90 xl:hover:scale-95"
		on:pointerup={() => goto('/')}
	>
		<img class="" src="projectgiven.webp" alt="..." />
	</div>

	{#if width <= 850}
		<!-- <div>A</div> -->
		<NavbarItem urls={links} />
	{:else}
		{#each links as { name, url }}
			<a
				href={url}
				class={'scale-90 transition-all hover:text-blue-0 sm:text-sm md:text-base lg:scale-100 lg:text-base xl:text-xl xl:hover:scale-110 xl:hover:font-bold ' +
					($page.url.pathname.includes(url) ? 'font-bold text-blue-0' : '')}
			>
				{name}
			</a>
		{/each}

		<div
			class="flex h-full cursor-pointer flex-col justify-center border-4 border-blue-1 transition-all hover:bg-blue-1 hover:text-white md:px-4 md:py-2 lg:h-min xl:hover:font-bold"
			on:pointerup={async () => {
				if ($page.url.pathname !== '/') await goto('/');
				const contacts = document.getElementById('contacts');
				contacts?.scrollIntoView();
			}}
		>
			Contact Us
		</div>
	{/if}
	<!-- {/if} -->
</div>
