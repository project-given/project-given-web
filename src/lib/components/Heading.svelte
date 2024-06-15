<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<div class="flex w-full flex-col items-center bg-blue-2 p-12 text-white">
	<div class="text-2xl md:text-4xl">{title}</div>
	<div class="h-4 md:h-6" />
	<div class="max-w-6xl text-base md:text-lg">{description}</div>
</div>
