<script lang="ts">
	import { goto } from '$app/navigation';
	import { screenUnit } from '$lib/screenUnit';
	import { page } from '$app/stores';
	// import NavbarItem from './NavbarItem.svelte';
	// const navigationItems: {
	// 	name: string;
	// 	urls?: { url: string; name: string; description: string }[];
	// }[] = [
	// 	{
	// 		name: 'OUR WORK',
	// 		urls: [
	// 			{
	// 				url: '/project-health',
	// 				name: 'Project Health',
	// 				description: 'This is our project health site'
	// 			},
	// 			{
	// 				url: '/project-education',
	// 				name: 'Project Education',
	// 				description: 'This is our project education site'
	// 			}
	// 		]
	// 	},
	// 	{
	// 		name: 'About',
	// 		urls: [
	// 			{
	// 				url: '/mission-and-history',
	// 				name: 'Mission and History',
	// 				description: 'This is our mission and history page'
	// 			}
	// 			// {
	// 			// 	url: '/contacts-and-social-media',
	// 			// 	name: 'Contacts and Social Media',
	// 			// 	description: 'This is our contacts and social media page'
	// 			// }
	// 		]
	// 	}
	// 	// {
	// 	// 	name: 'Latest',
	// 	// 	urls: [
	// 	// 		{
	// 	// 			url: 'google.com',
	// 	// 			name: 'Blog',
	// 	// 			description: 'This is where we store our blogs'
	// 	// 		}
	// 	// 	]
	// 	// }
	// ];

	const links: { name: string; link: string }[] = [
		{ name: 'Project Health', link: '/project-health' },
		{ name: 'Project Education', link: '/project-education' },
		{ name: 'Mission and History', link: '/mission-and-history' }
	];

	let scrollY: number = 0;
	let height: number = 1;

	$: screenUnit.set(scrollY / height);
</script>

<svelte:window bind:scrollY bind:innerHeight={height} />

<div class="flex h-20 w-full flex-row items-center justify-center gap-12 bg-white px-12 shadow-lg">
	<!-- {#if $screenUnit >= 1} -->
	<div class="scale-90 cursor-pointer transition-all hover:scale-95" on:pointerup={() => goto('/')}>
		<img class="" src="projectgiven.webp" alt="..." />
	</div>

	{#each links as { name, link }}
		<a
			href={link}
			class={'text-xl transition-all hover:scale-110 hover:font-bold hover:text-blue-0 ' +
				($page.url.pathname.includes(link) ? 'font-bold text-blue-0' : '')}
		>
			{name}
		</a>
	{/each}

	<div
		class="cursor-pointer border-4 border-blue-1 px-4 py-2 transition-all hover:bg-blue-1 hover:font-bold hover:text-white"
		on:pointerup={async () => {
			if ($page.url.pathname !== '/') await goto('/');
			const contacts = document.getElementById('contacts');
			contacts?.scrollIntoView();
		}}
	>
		Contact Us
	</div>
	<!-- {/if} -->
</div>
