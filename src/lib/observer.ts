import { scale } from 'svelte/transition';

const elements: {
	[id: string]: {
		delay: number;
		translate: string;
		animated: boolean;
	};
} = {};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(async (entry) => {
		const { translate, delay, animated } = elements[entry.target.id];

		if (entry.isIntersecting) {
			if (animated) return;
			elements[entry.target.id].animated = true;

			if (translate) entry.target.classList.add(translate);

			await new Promise((r) => setTimeout(r, delay));
			entry.target.classList.remove('opacity-0');

			// Re-place the element after transition
			if (translate) {
				entry.target.classList.remove('transition-opacity');
				entry.target.classList.add('transition-all');
				entry.target.classList.remove(translate);
			}
		}
	});
});

// Add an object to observe (with direction && delay)
type Directions = 'left' | 'right' | 'up' | 'down' | 'fade';
let idGenerator: number = 0;
function observeObject(element: HTMLDivElement, direction: Directions, delay: number) {
	let translate: string = '';
	switch (direction) {
		case 'left':
			translate = 'translate-x-full';
			break;
		case 'right':
			translate = '-translate-x-full';
			break;
		case 'up':
			translate = 'translate-y-full';
			break;
		case 'down':
			translate = '-translate-y-full';
			break;
	}

	element.id = `${idGenerator}`;
	elements[idGenerator] = {
		delay: delay,
		translate: translate,
		animated: false
	};

	observer.observe(element);
	idGenerator++;
}

export { observeObject };
