<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_2_ID } from '$lib/env';
	import * as emailjs from '@emailjs/browser';
	// let name = '';
	// let email = '';
	// let message = '';

	const info: { [key: string]: string } = {
		firstName: '',
		lastName: '',
		schoolCollege: '',
		city: '',
		country: '',
		email: '',
		message: ''
	};

	let isLoading: boolean = false;
	emailjs.init(EMAILJS_PUBLIC_KEY);
	async function sendEmail() {
		isLoading = true;
		try {
			await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_2_ID, {
				from_first_name: info.firstName,
				from_last_name: info.lastName,
				from_school_college: info.schoolCollege,
				from_city: info.city,
				from_country: info.country,
				from_email: info.email,
				from_message: info.message
			});
			for (const key of Object.keys(info)) info[key] = '';
		} catch (e: any) {
			console.log(e);
		}
		isLoading = false;
	}
</script>

<Heading title="Start A Chapter" description="" />

<div class="h-20" />

<div class="flex w-full flex-row justify-center">
	<div class="max-w-3xl px-8 sm:px-16 lg:max-w-4xl xl:max-w-6xl">
		<div class="text-2xl font-bold sm:text-4xl lg:text-6xl">Welcome to Project GIVEN!</div>
		<div class="h-4 sm:h-6 lg:h-12" />
		<div class="flex flex-col gap-7 text-lg md:text-2xl md:tracking-wider">
			<p>
				We are glad that you are considering volunteering to be a part of our dedication to support
				and empower disaster-impacted communities. As a new chapter of Project GIVEN, you have the
				unique opportunity to make a positive impact on the lives of these people who have endured
				immense challenges. Your dedication and compassion will be the driving force behind a
				resilient and empowered community.
			</p>

			<p>
				As a chapter of Project GIVEN, you will be given the task of running outreach programs in
				your specific region (worldwide), with chapter based-programs such as opening a fundraiser
				campaign, implementing relief and recovery projects, or open livelihood support and
				training. The possibilities are endless!
			</p>

			<p>
				Our only requirements are that you should have a focused mission on 1) helping and assisting
				those in need, 2) have a clear set of objectives and goals, and 3) be a school/college
				student.
			</p>

			<p>
				We’re excited to work with you! To become part of our mission, please fill out the brief
				form below. After the form is submitted, we will review your application and you will
				receive a confirmation from us within 1-2 weeks. Please feel free to reach out to us through
				our email below as well if you have any more questions or if you are encountering any
				issues.
			</p>
			<div class="h-20" />
			<form class="items-ce flex h-fit w-full flex-col gap-4" on:submit|preventDefault={sendEmail}>
				<div class="flex w-full flex-row">
					<div class="flex-1">
						<label>
							First Name
							<input class="w-full p-2" required type="text" bind:value={info.firstName} />
						</label>
					</div>
					<div class="w-4" />
					<div class="flex-1">
						<label>
							Last Name
							<input class="w-full p-2" required type="text" bind:value={info.lastName} />
						</label>
					</div>
				</div>
				<!-- <input required class="w-full p-2" type="text" placeholder="Name" bind:value={info.name} /> -->
				<label>
					Email
					<input required class="w-full p-2" type="email" bind:value={info.email} />
				</label>
				<label>
					Name of School / College
					<input required class="w-full p-2" type="text" bind:value={info.schoolCollege} />
				</label>
				<div class="flex w-full flex-row">
					<div class="flex-1">
						<label>
							Country of Residence
							<input class="w-full p-2" required type="text" bind:value={info.country} />
						</label>
					</div>
					<div class="w-4" />
					<div class="flex-1">
						<label>
							City of Residence
							<input class="w-full p-2" required type="text" bind:value={info.city} />
						</label>
					</div>
				</div>
				<label>
					Describe in detail what your chapter’s goals will be, what your specific plans are, what
					form your events will take, et. Feel free to be as descriptive/specific as possible.
					<textarea required class="h-28 w-full p-2" bind:value={info.message} />
				</label>
				<button
					class={'shadows w-full max-w-md  bg-blue-2 py-2 font-bold shadow shadow-black transition-colors ' +
						(isLoading ? 'cursor-default bg-slate-200 ' : '')}
					type="submit"
					disabled={isLoading}
				>
					Submit
				</button>
			</form>
		</div>
	</div>
</div>

<div class="h-24" />

<style>
	p {
		text-align: justify;
	}

	input {
		border: 1px black solid;
		margin-top: 4px;
	}

	textarea {
		border: 1px black solid;
		margin-top: 4px;
	}
</style>
