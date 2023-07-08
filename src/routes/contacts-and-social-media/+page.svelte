<script lang="ts">
	import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '$lib/env';
	import * as emailjs from '@emailjs/browser';
	// let name = '';
	// let email = '';
	// let message = '';

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

<div class="flex h-screen w-screen flex-row justify-center gap-8 p-8 pt-16">
	<div class="flex h-min w-full max-w-lg flex-col text-8xl">
		<div>GET</div>
		<div>INVOLVED</div>
	</div>
	<form
		class="flex h-fit w-80 flex-col gap-4 md:w-96 lg:w-[500px]"
		on:submit|preventDefault={sendEmail}
	>
		<input
			required
			class="w-full rounded p-2"
			type="text"
			placeholder="Name"
			bind:value={info.name}
		/>
		<input
			required
			class="w-full rounded p-2"
			type="email"
			placeholder="Email"
			bind:value={info.email}
		/>
		<textarea
			required
			class=" w-full rounded p-2"
			placeholder="Message"
			bind:value={info.message}
		/>
		<button
			class={'w-full rounded border-2 border-black py-2 font-bold transition-colors  ' +
				(isLoading ? 'cursor-default bg-slate-200 ' : '')}
			type="submit"
			disabled={isLoading}
		>
			Submit
		</button>
	</form>
</div>
