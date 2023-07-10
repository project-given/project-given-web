<script lang="ts">
	import { goto } from '$app/navigation';
	import NavbarItem from './NavbarItem.svelte';
	const navigationItems: {
		name: string;
		urls?: { url: string; name: string; description: string }[];
		onClick?: Function;
	}[] = [
		{
			name: 'HOME',
			onClick: () => goto('/')
		},
		{
			name: 'OUR WORK',
			urls: [
				{
					url: '/project-health',
					name: 'Project Health',
					description: 'This is our project health site'
				},
				{
					url: '/project-education',
					name: 'Project Education',
					description: 'This is our project education site'
				}
			]
		},
		{
			name: 'About',
			urls: [
				{
					url: '/mission-and-history',
					name: 'Mission and History',
					description: 'This is our mission and history page'
				}
				// {
				// 	url: '/contacts-and-social-media',
				// 	name: 'Contacts and Social Media',
				// 	description: 'This is our contacts and social media page'
				// }
			]
		}
		// {
		// 	name: 'Latest',
		// 	urls: [
		// 		{
		// 			url: 'google.com',
		// 			name: 'Blog',
		// 			description: 'This is where we store our blogs'
		// 		}
		// 	]
		// }
	];
</script>

<div class="flex h-12 w-screen flex-row items-center justify-end gap-12 bg-white px-12 shadow">
	{#each navigationItems as { name, urls, onClick }}
		<NavbarItem {name} {urls} {onClick} />
	{/each}
</div>
