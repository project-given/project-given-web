<script lang="ts">
	import ImagesPart from './ImagesPart.svelte';
	import StatsPart from './StatsPart.svelte';
	import TopPart from './TopPart.svelte';
	import VideosPart from './VideosPart.svelte';
	import AboutPart from './AboutPart.svelte';
	import ShowElement from '$lib/components/ShowElement.svelte';
	import ContactsPart from './contacts-and-social-media/ContactsPart.svelte';
</script>

<TopPart />
<!-- <div class="sticky top-0 z-40">
	<Navbar />
</div> -->

<div class=" bg-white">
	<div class="h-8 md:h-20" />
	<StatsPart />
	<div class="h-32 md:h-96" />
	<AboutPart />
	<div class="h-32" />

	<div class="py-16">
		<ShowElement direction="fade" delay={300}>
			<div class="flex w-full flex-col items-center">
				<div class="text-center text-5xl text-blue-1 sm:text-6xl md:text-7xl">Latest News</div>
				<div class="text-lg text-slate-400 sm:text-xl">
					Our latest stories from around the world.
				</div>
			</div>
		</ShowElement>
	</div>

	<ImagesPart />

	<div class="h-32" />

	<VideosPart />

	<div class="h-60" />
	<ContactsPart />
</div>
