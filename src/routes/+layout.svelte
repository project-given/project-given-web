<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import ImageCarouselPopup from '$lib/components/popups/ImageCarouselPopup.svelte';

	const description =
		'Project Given is a non-profit organization aiming to improve lives of unprivileged members with free whealthcare and education.';
</script>

<svelte:head>
	<title>Project Given</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="description" content={description} />
	<meta property="og:url" content="https://projectgiven.org/" />
	<meta property="og:title" content="Project Given" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/projectgivenfront.jpg" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />
</svelte:head>

<div class="font-poppins">
	<!-- {#if $page.url.pathname !== '/'} -->
	<div class="fixed top-0 z-40 w-full">
		<Navbar />
	</div>
	<div class={$page.url.pathname !== '/' ? 'pt-20' : ''}>
		<slot />
	</div>
</div>

<ImageCarouselPopup />
