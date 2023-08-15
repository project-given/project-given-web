<script lang="ts">
	import ImageCarousel from '$lib/components/ImageCarousel.svelte';
	import ShowElement from '$lib/components/ShowElement.svelte';
	import ImageInfo from '$lib/components/default/ImageInfo.svelte';
	import { firestore, storage } from '$lib/firebase';
	import { doc, getDoc, type DocumentSnapshot } from 'firebase/firestore';
	import { getDownloadURL, listAll, ref, type StorageReference } from 'firebase/storage';
	import { onMount } from 'svelte';

	// let
	const info: {
		about?: {
			title: string;
			descriptions: string[];
		};
		main?: {
			title: string;
			description: string;
			createdAt: string;

			// firstImage: string;
			// imagesRef: StorageReference;
		};
	} = {};

	let images: string[] = [];

	onMount(async () => {
		// const document =
		const data = (await getDoc(firestore.infoDoc)).data()!;
		const id = data.main.id;

		const des = data.about.description.split('..');
		info['about'] = {
			title: data.about.title,
			descriptions: [des[0] + '.', des[1]]
		};

		let event: DocumentSnapshot;
		if (data.main.type === 'projectHealth')
			event = await getDoc(doc(firestore.projectHealthCollection, id));
		else event = await getDoc(doc(firestore.projectEducationCollection, id));
		const eventData = event.data()!;

		info['main'] = {
			title: eventData.title,
			description: eventData.description,
			createdAt: eventData.createdAt.toDate().toISOString()
		};
		// let imagesRef: StorageReference;
		// if (data.main.type === 'projectHealth') imagesRef = ref(storage.projectHealth, id);
		// else imagesRef = ref(storage.projectEducation, id);

		const imagesRef: StorageReference =
			data.main.type === 'projectHealth' ? storage.projectHealth : storage.projectEducation;
		const allImages = await listAll(ref(imagesRef, id));
		allImages.items.forEach(async (item) => {
			const url = await getDownloadURL(item);
			images.push(url);
			const last = images.length - 1;
			images[last] = images[last];
			// imagePopup.update((ip) => {
			// 	if (!ip) return ip;
			// 	ip!['urls'].push(url);
			// 	return ip;
			// });
		});
	});
</script>

<ShowElement delay={200} direction="up">
	<div class="flex w-full flex-row justify-center">
		<div class="max-w-3xl px-8 sm:px-16 lg:max-w-4xl xl:max-w-6xl">
			{#if info['about']}
				<div class="text-2xl font-bold sm:text-4xl lg:text-5xl">{info['about']['title']}</div>
				<div class="h-4 sm:h-6 lg:h-12" />
				<p class="flex flex-col gap-4 text-lg md:text-2xl md:leading-10 md:tracking-wider">
					{#each info['about']['descriptions'] as des}
						<div class="">{des}</div>
					{/each}
				</p>
			{:else}
				<div class="h-96 w-full" />
			{/if}
		</div>
	</div>
</ShowElement>
<div class="h-52" />
<!-- <ShowElement delay={200} direction="fade"> -->

<div class="flex min-h-[100vh] w-full flex-col-reverse sm:h-[120vh] md:h-[75vh] md:flex-row">
	<div class="flex-1">
		<ImageCarousel bind:images />
	</div>
	<div class="flex max-w-5xl flex-1 flex-col justify-center bg-blue-1 p-16 text-white">
		<ShowElement delay={200} direction="left">
			<div class="h-full w-full">
				{#if info['main']}
					<div class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">{info['main']['title']}</div>
					<div class="h-8 sm:h-14 lg:h-20" />
					<div class="text sm:text-xl lg:text-2xl xl:text-3xl">
						{info['main']['description']}
					</div>
				{/if}
			</div>
		</ShowElement>
	</div>
</div>

<!-- <div class="flex h-[500px] w-full flex-row justify-center">
		{#if info['main']}
			<div class="h-[500px] max-w-2xl overflow-hidden rounded-xl shadow-lg shadow-black">
				<ImageInfo
					title={info['main']['title']}
					description={info['main']['description']}
					firstImage={info['main']['firstImage']}
					imagesRef={info['main']['imagesRef']}
				/>
			</div>
			<div class="flex h-full max-w-xl flex-col justify-center gap-6 pl-12">
				<div class="text-6xl">{info['main']['title']}</div>
				<div class="h-2 w-16 bg-blue-1" />
				<div class="text-lg">{info['main']['description']}</div>
			</div>
			{/if}
		</div> -->
<!-- height={400} -->
<!-- <ImageInfo
			title="SOMETHING"
			description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente mollitia ut quasi dolore pariatur, explicabo quas fugit! Fugit, nostrum! Nam porro autem rem necessitatibus, voluptas quis assumenda dolorum ea."
			url="https://images.unsplash.com/20/cambridge.JPG?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4ODYxOTE4M3w&ixlib=rb-4.0.3&q=85&w=1920"
			height={400}
			/> -->
<!-- </ShowElement> -->
