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
	<div class="flex flex-col">
		<div class="flex w-36 flex-row justify-end text-8xl font-bold text-blue-0">
			{currentNum}
		</div>
		<div class="text-end text-2xl font-bold text-black">{about}</div>
	</div>
	<div class="text-6xl font-bold text-blue-1">{suffix}</div>
</div>
