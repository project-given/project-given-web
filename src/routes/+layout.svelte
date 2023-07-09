<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import ImageCarouselPopup from '$lib/components/popups/ImageCarouselPopup.svelte';
</script>

<div class="font-mono">
	{#if $page.url.pathname !== '/'}
		<div class="fixed top-0 z-40">
			<Navbar />
		</div>
	{/if}
	<div class={$page.url.pathname !== '/' ? 'pt-12' : ''}>
		<slot />
	</div>
</div>

<ImageCarouselPopup />
