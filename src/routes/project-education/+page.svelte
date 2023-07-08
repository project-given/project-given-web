<script lang="ts">
	import ImageCard from '$lib/components/ImageCard.svelte';

	const images: string[] = [
		'https://images.unsplash.com/20/cambridge.JPG?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4ODYxOTE4M3w&ixlib=rb-4.0.3&q=85&w=1920',
		'https://images.unsplash.com/photo-1507664224104-296e39ab59e6?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4ODYyMTM5M3w&ixlib=rb-4.0.3&q=85&w=1920',
		'https://images.unsplash.com/21/shaggy.JPG?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4ODYyMTM5M3w&ixlib=rb-4.0.3&q=85&w=1920',
		'https://images.unsplash.com/photo-1475727946784-2890c8fdb9c8?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4ODYyMTM5M3w&ixlib=rb-4.0.3&q=85&w=1920',
		'https://images.unsplash.com/photo-1508182390781-8dd476c3237c?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4ODYyMTM5M3w&ixlib=rb-4.0.3&q=85&w=192'
	];

	const about: { title: string; description: string }[] = [
		{
			title: 'Baguio, Philippines, 2022',
			description:
				'Project Given provided medical help through online meetings with 2 doctors from the United States. Ten patients were treated in total, with each patient getting prescriptions based on their symptoms and lifestyle.'
		},
		{
			title: 'Baguio, Philippines, 2022',
			description:
				'Project Given provided medical help through online meetings with 2 doctors from the United States. Ten patients were treated in total, with each patient getting prescriptions based on their symptoms and lifestyle.'
		},
		{
			title: 'Baguio, Philippines, 2022',
			description:
				'Project Given provided medical help through online meetings with 2 doctors from the United States. Ten patients were treated in total, with each patient getting prescriptions based on their symptoms and lifestyle.'
		},
		{
			title: 'Baguio, Philippines, 2022',
			description:
				'Project Given provided medical help through online meetings with 2 doctors from the United States. Ten patients were treated in total, with each patient getting prescriptions based on their symptoms and lifestyle.'
		}
	];
</script>

<div class="flex w-full flex-col items-center p-8">
	<div class="text-8xl">PROJECT EDUCATION</div>
	<div>
		Our mission is to make quality healthcare accessible to all, regardless of their location or
		financial status. We offer telemedicine clinics and other services that are completely free of
		charge and staffed by volunteers who are committed to making a positive difference in the world.
		We believe that everyone has the right to receive the medical care they need and are dedicated
		to helping those who may not otherwise have access to it.
	</div>
	<div class="h-[100px]" />
	<div class="flex w-full flex-row flex-wrap justify-center gap-6">
		{#each about as { title, description }, i}
			<ImageCard {images} {description} {title} />
		{/each}
	</div>
</div>
