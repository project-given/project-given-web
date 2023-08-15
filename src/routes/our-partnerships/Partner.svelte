<script lang="ts">
	export let icon: string;
	export let title: string;
	export let link: string;
	export let description: string;
</script>

<div class="flex max-w-3xl flex-col justify-center">
	<a href={link}>
		<div class="group -ml-5 mb-4 flex cursor-pointer flex-row items-center md:ml-0">
			<div class="h-16 w-16">
				<img
					class="scale-80 transition-transform group-hover:scale-90 md:scale-100 md:group-hover:scale-110"
					src={`/icons/${icon}`}
					alt="You can give"
				/>
			</div>
			<div
				class="text-2xl transition-all group-hover:text-blue-1 sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl"
			>
				{title}
			</div>
		</div>
	</a>
	<div class="text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl">
		{description}
	</div>
</div>
