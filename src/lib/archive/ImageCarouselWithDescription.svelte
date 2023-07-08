<script lang="ts">
	import ImageCarousel from '../components/ImageCarousel.svelte';

	export let title: string;
	export let description: string;
	export let reverseDirection: boolean = false;

	export let images: string[];
	export let width: number;
	export let height: number;
</script>

<div class={'flex w-min flex-row ' + (reverseDirection ? 'flex-row-reverse' : '')}>
	<div style={`width: ${width}px; height: ${height}px;`}>
		<ImageCarousel {images} {width} {height} />
	</div>
	<div class="flex w-min flex-col gap-4 p-6">
		<div class="whitespace-nowrap text-4xl">
			{title}
		</div>
		<div class="text-xl">
			{description}
		</div>
	</div>
</div>
