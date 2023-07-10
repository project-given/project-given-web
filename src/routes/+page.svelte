<script lang="ts">
	import { screenUnit } from '$lib/screenUnit';
	import ImagesPart from './ImagesPart.svelte';
	import Navbar from '../lib/components/navigation/Navbar.svelte';
	import StatsPart from './StatsPart.svelte';
	import TopPart from './TopPart.svelte';
	import VideosPart from './VideosPart.svelte';
	import AboutPart from './AboutPart.svelte';
	import ContactsPart from './ContactsPart.svelte';
	import ShowElement from '$lib/components/ShowElement.svelte';
</script>

<TopPart />
<!-- <div class="sticky top-0 z-40">
	<Navbar />
</div> -->

<div class=" bg-white">
	<div class="h-20" />
	<StatsPart />
	<div class="h-96" />
	<AboutPart />
	<div class="h-32" />

	<div class="py-16">
		<ShowElement direction="fade" delay={300}>
			<div class="flex w-full flex-col items-center">
				<div class="text-center text-7xl text-blue-1">Latest News</div>
				<div class="text-xl text-slate-400">Our latest stories from around the world.</div>
			</div>
		</ShowElement>
	</div>

	<ImagesPart />

	<div class="h-32" />

	<VideosPart />

	<div class="h-60" />
	<ContactsPart />
</div>
