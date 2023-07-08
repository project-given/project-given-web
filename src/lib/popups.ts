import { writable, type Writable } from 'svelte/store';

interface ImagePopupParameters {
	urls: string[];
	title: string;
	description: string;
}

const imagePopup: Writable<ImagePopupParameters | null> = writable(null);

export { imagePopup };
