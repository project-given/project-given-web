<script lang="ts">
	import { screenUnit } from '$lib/screenUnit';
	import ImagesPart from './ImagesPart.svelte';
	import Navbar from '../lib/components/navigation/Navbar.svelte';
	import StatsPart from './StatsPart.svelte';
	import TopPart from './TopPart.svelte';
	import VideosPart from './VideosPart.svelte';

	let scrollY: number = 0;
	let height: number = 1;

	$: screenUnit.set(scrollY / height);
</script>

<svelte:window bind:scrollY bind:innerHeight={height} />

<TopPart />
<div
	class="sticky top-0 z-40 transition-opacity duration-500"
	style={$screenUnit >= 1 ? 'opacity: 1' : 'opacity: 0'}
>
	<Navbar />
</div>

<div class=" bg-white">
	<StatsPart />

	<div class="h-10" />

	<ImagesPart />

	<div class="h-40" />

	<VideosPart />

	<div class="h-[600px]" />
</div>
