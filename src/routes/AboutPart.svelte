<script lang="ts">
	import ShowElement from '$lib/components/ShowElement.svelte';
	import ImageInfo from '$lib/components/default/ImageInfo.svelte';
	import { firestore, storage } from '$lib/firebase';
	import { doc, getDoc, type DocumentSnapshot } from 'firebase/firestore';
	import { getDownloadURL, ref, type StorageReference } from 'firebase/storage';
	import { onMount } from 'svelte';

	// let
	const info: {
		about?: {
			title: string;
			description: string;
		};
		main?: {
			title: string;
			description: string;
			createdAt: string;

			firstImage: string;
			imagesRef: StorageReference;
		};
	} = {};

	onMount(async () => {
		// const document =
		const data = (await getDoc(firestore.infoDoc)).data()!;
		const id = data.main.id;

		info['about'] = data.about;

		let event: DocumentSnapshot;
		if (data.type === 'projectHealth')
			event = await getDoc(doc(firestore.projectHealthCollection, id));
		else event = await getDoc(doc(firestore.projectEducationCollection, id));
		const eventData = event.data()!;

		let imagesRef: StorageReference;
		if (data.type === 'projectHealth') imagesRef = ref(storage.projectHealth, id);
		else imagesRef = ref(storage.projectEducation, id);

		info['main'] = {
			title: eventData.title,
			description: eventData.description,
			createdAt: eventData.createdAt.toDate().toISOString(),

			firstImage: eventData.firstImage,
			imagesRef: imagesRef
		};
	});
</script>

<ShowElement delay={200} direction="up">
	<div class="flex w-full flex-row justify-center">
		<div class=" max-w-4xl">
			{#if info['about']}
				<div class="pb-4 text-5xl font-bold">{info['about']['title']}</div>
				{info['about']['description']}
			{:else}
				<div class="h-96 w-full" />
			{/if}
		</div>
	</div>
</ShowElement>
<div class="h-60" />
<ShowElement delay={200} direction="fade">
	<div class="flex h-[400px] w-full flex-row justify-center">
		{#if info['main']}
			<div class="h-full overflow-hidden rounded-xl shadow-lg shadow-black">
				<ImageInfo
					title={info['main']['title']}
					description={info['main']['description']}
					firstImage={info['main']['firstImage']}
					imagesRef={info['main']['imagesRef']}
					height={400}
				/>
				<!-- <ImageInfo
					title="SOMETHING"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente mollitia ut quasi dolore pariatur, explicabo quas fugit! Fugit, nostrum! Nam porro autem rem necessitatibus, voluptas quis assumenda dolorum ea."
					url="https://images.unsplash.com/20/cambridge.JPG?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4ODYxOTE4M3w&ixlib=rb-4.0.3&q=85&w=1920"
					height={400}
					/> -->
			</div>
			<div class="flex h-full max-w-xl flex-col justify-center gap-6 pl-12">
				<div class="text-6xl">{info['main']['title']}</div>
				<div class="h-2 w-16 bg-blue-800" />
				<div class="text-lg">{info['main']['description']}</div>
			</div>
		{/if}
	</div>
</ShowElement>
