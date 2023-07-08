<script lang="ts">
	import ImageInfo from '$lib/components/default/ImageInfo.svelte';
	import ImagesGallery from '$lib/components/default/ImagesGallery.svelte';

	const projectHealthImages: { url: string; description: string; title: string }[] = [
		{
			url: 'https://images.unsplash.com/20/cambridge.JPG?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4ODYxOTE4M3w&ixlib=rb-4.0.3&q=85&w=1920',
			description: 'SOMETHING',
			title: 'TITLE!'
		},
		{
			url: 'https://images.unsplash.com/photo-1507664224104-296e39ab59e6?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4ODYyMTM5M3w&ixlib=rb-4.0.3&q=85&w=1920',
			description: 'SOMETHING2',
			title: 'TITLE2!'
		},
		{
			url: 'https://images.unsplash.com/21/shaggy.JPG?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4ODYyMTM5M3w&ixlib=rb-4.0.3&q=85&w=1920',
			description: 'SOMETHING3',
			title: 'TITLE!3'
		},
		{
			url: 'https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4ODYyMTM5M3w&ixlib=rb-4.0.3&q=85&w=1920',
			description: 'SOMETHING4',
			title: 'TITLE!4'
		}
	];

	let windowWidth: number = 0;
	let width: number = 0;
	// let height: number = 500;
	$: width = windowWidth / 4;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="flex flex-row overflow-hidden">
	{#each projectHealthImages as { url, description, title }}
		<div style={`width: ${width}px; height: ${width}px;`}>
			{#if width !== 0}
				<ImageInfo {url} {description} {title} {width} height={width} />
			{/if}
		</div>
	{/each}
	<!-- <div class="p-12 text-6xl">PROJECT HEALTH</div> -->
	<!-- <ImagesGallery images={projectHealthImages} imageHeight={500} imageWidth={500} /> -->
</div>

<div class="h-40" />

<div class="flex w-screen flex-col">
	<div class="p-12 text-6xl">PROJECT EDUCATION</div>
	<ImagesGallery images={projectHealthImages} imageHeight={500} imageWidth={500} />
</div>
