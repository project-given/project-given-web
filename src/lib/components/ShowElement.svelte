<script lang="ts">
	import { observeObject } from '$lib/observer';
	import { onMount } from 'svelte';

	// export let direction: Directions = 'horizontal';
	export let speed: 'slow' | 'medium' | 'fast' = 'medium';
	export let direction: 'left' | 'right' | 'up' | 'down' | 'fade' = 'right';
	export let delay: number = 0;

	let element: HTMLDivElement;
	onMount(async () => {
		switch (speed) {
			case 'slow':
				element.classList.add('duration-1000');
				break;
			case 'medium':
				element.classList.add('duration-500');
				break;
			case 'fast':
				element.classList.add('duration-200');
				break;
		}

		observeObject(element, direction, delay);
	});
</script>

<div bind:this={element} class="transition-all) opacity-0 transition-opacity">
	<slot />
</div>

<!-- <script lang="ts">
	import { onMount } from 'svelte';

	// export let direction: 'vertical' | 'horizontal' = 'vertical';
	export let direction: 'left' | 'right' | 'up' | 'down' = 'right';

	export let delay: number = 0;
	export let speed: 'slow' | 'medium' | 'fast' = 'medium';

	let element: HTMLDivElement;
	onMount(async () => {
		const classes = element.classList;

		switch (direction) {
			case 'left':
				classes.add('translate-x-full');
				break;
			case 'right':
				classes.add('-translate-x-full');
				break;
			case 'up':
				classes.add('translate-y-full');
				break;
			case 'down':
				classes.add('-translate-y-full');
				break;
		}

		switch (speed) {
			case 'slow':
				classes.add('duration-1000');
				break;
			case 'medium':
				classes.add('duration-500');
				break;
			case 'fast':
				classes.add('duration-200');
				break;
		}

		await new Promise((r) => setTimeout(r, delay));

		classes.add('opacity-100');
		switch (direction) {
			case 'left':
				// classes.add('-translate-x-0');
				classes.remove('translate-x-full');
				break;
			case 'right':
				// classes.add('translate-x-0');
				classes.remove('-translate-x-full');
				break;
			case 'up':
				// classes.add('-translate-y-0');
				classes.remove('translate-y-full');
				break;
			case 'down':
				// classes.add('translate-y-0');
				classes.remove('-translate-y-full');
				break;
		}
	});
</script>

<div bind:this={element} class="transition-all opacity-0">
	<slot />
</div> -->
