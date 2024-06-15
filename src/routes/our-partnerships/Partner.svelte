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
			<div class="text-xl transition-all group-hover:text-blue-1 lg:text-3xl xl:text-4xl">
				{title}
			</div>
		</div>
	</a>
	<div class="text-lg">
		{description}
	</div>
</div>
