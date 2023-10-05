<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import ImageCarouselPopup from '$lib/components/popups/ImageCarouselPopup.svelte';

	const description =
		'Project Given is a non-profit organization aiming to improve lives of unprivileged members with free whealthcare and education.';
</script>

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
