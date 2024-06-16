<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
</script>

<Heading title="Doczilla" description="Our remote telemedicine app" />

<div class="h-16" />
<section class="flex w-full flex-col items-center px-8">
	<div class="flex max-w-7xl flex-col items-start justify-center gap-12">
		<div class="flex flex-col items-center gap-4 md:flex-row">
			<img
				class="w-[300px] flex-1 overflow-clip rounded-xl object-cover"
				width="300px"
				src="/temp/doczila/doczilla0.jpg"
				alt="remote telemedicine"
			/>
			<div class="flex flex-1 flex-col gap-4 p-4">
				<h1 class="-mt-6 text-3xl sm:text-4xl">About</h1>
				<p class="text-lg">
					Doczilla, a telemedicine app with an integrated EMR (Electronic Medical Record) system
					designed to connect distant doctors with unprivileged communities for remote medication.
					Here, doctors were able to see an extensive form filled out by patients, have built-in
					video calling, and access previous patients’ medical records (used on the app) to provide
					a more accurate diagnosis. With it, we were able to utilize it for over 50 patients.
				</p>
			</div>
		</div>
		<div class="flex flex-col items-center gap-4 md:flex-row">
			<div class="flex flex-1 flex-col gap-4 p-4">
				<h1 class="-mt-6 text-3xl sm:text-4xl">Congressional App Challenge 2nd Place</h1>
				<p class="text-lg">
					The
					<a
						class="text-blue-500 hover:underline"
						target="_blank"
						href="https://www.congressionalappchallenge.us/"
					>
						Congressional App Challenge
					</a>
					is an event where students from all over the United States are invited to participate in a
					competition to create an app that solves a problem in their community. In 2022, 9,000 students
					registered for the national competition. Our team developed a telemedicine app called Doczilla,
					which connects distant doctors with unprivileged communities, and won 2nd Place.
				</p>
			</div>
			<img
				class="w-[300px] flex-1 overflow-clip rounded-xl object-cover"
				width="300px"
				src="/temp/doczila/congressional.jpg"
				alt="remote telemedicine"
			/>
		</div>
	</div>
</section>
<div class="h-20" />

<div class="flex w-full flex-col items-center">
	<div class="flex w-min flex-col">
		<h1 class="pb-4 pt-1 text-center text-3xl">Doczilla Demo</h1>
		<div
			class="h-[140px] w-[250px] overflow-hidden rounded-lg shadow-sm shadow-black sm:h-[240px] sm:w-[440px] lg:h-[330px] lg:w-[600px]"
		>
			<lite-youtube videoid="pQ39qnslU5A" />
		</div>
	</div>
</div>

<div class="h-16" />
