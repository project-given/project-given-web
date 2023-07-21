<script lang="ts">
	import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '$lib/env';
	import * as emailjs from '@emailjs/browser';
	// let name = '';
	// let email = '';
	// let message = '';

	const contacts: {
		name: string;
		link: string;
	}[] = [
		{ name: 'Facebook', link: 'https://www.facebook.com/projectgiven/?ref=page_internal' },
		{ name: 'Youtube', link: 'https://www.youtube.com/channel/UCcASPxQ1tOBWeGzOmPYTjlQ' },
		{ name: 'Instagram', link: 'https://www.instagram.com/projectgiven/' }
	];

	const info: { name: string; email: string; message: string } = {
		name: '',
		email: '',
		message: ''
	};

	let isLoading: boolean = false;
	emailjs.init(EMAILJS_PUBLIC_KEY);
	async function sendEmail() {
		isLoading = true;
		try {
			await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
				from_name: info.name,
				from_email: info.email,
				from_message: info.message
			});
			(info.name = ''), (info.email = ''), (info.message = '');
		} catch (e: any) {
			console.log(e);
		}
		isLoading = false;
	}
</script>

<div
	class="flex h-min w-full flex-col items-center justify-center gap-16 bg-blue-0 p-8 py-16 text-white md:flex-row"
>
	<div class="h-min max-w-lg text-5xl sm:text-6xl md:w-min md:text-7xl lg:text-8xl">
		<div>Contact</div>
	</div>
	<form
		class="flex h-fit w-80 flex-col gap-4 md:w-96 lg:w-[500px]"
		on:submit|preventDefault={sendEmail}
	>
		<input required class="w-full p-2" type="text" placeholder="Name" bind:value={info.name} />
		<input required class="w-full p-2" type="email" placeholder="Email" bind:value={info.email} />
		<textarea required class=" w-full p-2" placeholder="Message" bind:value={info.message} />
		<button
			class={'shadows w-full bg-blue-2  py-2 font-bold shadow shadow-black transition-colors  ' +
				(isLoading ? 'cursor-default bg-slate-200 ' : '')}
			type="submit"
			disabled={isLoading}
		>
			Submit
		</button>
	</form>
	<div class="flex gap-8 md:flex-col">
		{#each contacts as { name, link }}
			<a href={link}>
				<img
					class="h-12 w-12 cursor-pointer transition-transform hover:scale-110"
					src={`/contacts/${name}.svg`}
					alt="..."
				/>
			</a>
		{/each}
	</div>
</div>
