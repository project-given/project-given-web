import { writable, type Writable } from 'svelte/store';

let screenUnit: Writable<number> = writable(0);

export { screenUnit };
