<script>
	import ShowElement from '$lib/components/ShowElement.svelte';
	import ImageInfo from '$lib/components/default/ImageInfo.svelte';
</script>

<ShowElement delay={200} direction="up">
	<div class="flex w-full flex-row justify-center">
		<div class=" max-w-4xl">
			<div class="pb-4 text-5xl font-bold">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas inventore excepturi adipisci
			</div>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, inventore! Iure voluptatem
			dolor incidunt veritatis ipsum amet accusamus beatae reprehenderit minus magnam, quidem magni animi!
			Explicabo ex qui voluptatum est!
		</div>
	</div>
</ShowElement>
<div class="h-60" />
<ShowElement delay={200} direction="fade">
	<div class="flex h-[400px] w-full flex-row justify-center">
		<div class="h-full overflow-hidden rounded-xl shadow-lg shadow-black">
			<ImageInfo
				title="SOMETHING"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sapiente mollitia ut quasi dolore pariatur, explicabo quas fugit! Fugit, nostrum! Nam porro autem rem necessitatibus, voluptas quis assumenda dolorum ea."
				url="https://images.unsplash.com/20/cambridge.JPG?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4ODYxOTE4M3w&ixlib=rb-4.0.3&q=85&w=1920"
				height={400}
			/>
		</div>
		<div class="flex h-full max-w-xl flex-col justify-center gap-6 pl-12">
			<div class="text-6xl">Lorem ipsum dolor sit amet consectetur</div>
			<div class="h-2 w-16 bg-blue-800" />
			<div class="text-lg">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi placeat, ipsam, magnam
				eaque aut veniam dolores voluptatibus pariatur tenetur aspernatur accusamus cumque nemo
				sequi, et quasi! Iste nisi asperiores nostrum.
			</div>
		</div>
	</div>
</ShowElement>
