import type { StorageReference } from 'firebase/storage';
import { writable, type Writable } from 'svelte/store';

interface ImagePopupParameters {
	urls: string[];
	// firstImage: string;
	// imagesRef: string[];
	title: string;
	description: string;
}

const imagePopup: Writable<ImagePopupParameters | null> = writable(null);

export { imagePopup };
