<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	export let num: number;
	export let suffix: string;
	export let about: string;
	export let delay: number;

	let currentNum: number = 87;
	let root: HTMLDivElement;

	onMount(async () => observer.observe(root));
	onDestroy(() => observer.disconnect());

	let observer = new IntersectionObserver((entries) => {
		entries.forEach(async (entry) => {
			if (entry.isIntersecting) {
				await new Promise((r) => setTimeout(r, delay * 1.3));

				const singleTime: number = 20;
				const times: number = 50;

				for (let i = 0; i < times; i++) {
					let n = Math.floor(Math.random() * num);
					if (num > 100 && n < 100) n += 100;
					else if (num > 10 && n < 10) n += 10;
					currentNum = n;

					await new Promise((r) => setTimeout(r, singleTime));
				}
				currentNum = num;
			}
		});
	});
</script>

<div class="flex w-min flex-row" bind:this={root}>
	<div class="ml-12 flex flex-col items-end sm:ml-0">
		<div class="relative h-24 w-32 text-blue-0 sm:h-16 sm:w-20 md:h-20 md:w-24 xl:h-24 xl:w-32">
			<div class="absolute right-0 text-8xl font-bold sm:text-5xl md:text-7xl xl:text-8xl">
				{currentNum}
			</div>
		</div>
		<div class="text-end font-bold text-black md:text-2xl">{about}</div>
	</div>
	<div class="text-5xl font-bold text-blue-1 md:text-5xl xl:text-6xl">{suffix}</div>
</div>
