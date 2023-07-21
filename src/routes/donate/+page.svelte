<script>
	import Heading from '$lib/components/Heading.svelte';
</script>

<Heading title="Donate Project Given" description="" />

<div class="flex w-full flex-col items-center">
	<div class="max-w-7xl px-8 py-12 text-center text-lg md:text-2xl md:tracking-wider">
		{`
		Project Given is a nonprofit organization. All donations are tax-deductible to the full extent
		allowable under IRS regulations. We rely on sponsors and donors to fund our programs and our
		team is entirely volunteer-based. You can see a full list of our corporate sponsors on our partnerships
		page under Get Involved > Our Partnerships. Thank you for considering donating to Project Ggiven. We truly appreciate your generosity.
		If you have any questions regarding sponsorship or if your company would like to get involved as
		a corporate sponsor, please contact us To donate to Project Given, please click the "Donate"
		button below. Thank you so much.
        `}
	</div>
	<button
		class="bg-blue-2 p-12 py-2 font-bold text-white shadow shadow-black transition-all hover:scale-105"
	>
		DONATE
	</button>
</div>
