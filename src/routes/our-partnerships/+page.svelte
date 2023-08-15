<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import Partner from './Partner.svelte';
</script>

<Heading title="Our Partnerships" description="" />
<div class="flex w-full flex-col items-center gap-12 p-12">
	<Partner
		icon="youcangive.png"
		link="https://www.youcangiveusa.org/"
		title="You Can Give"
		description="You Can Give is a nonprofit religious organization providing spiritual and physical aid to children and their families in need around the world. Since 2018, we have helped people who are in poverty and underprivileged circumstances to help them live a healthier and happier life."
	/>
	<Partner
		icon="saigonchildren.ico"
		link="https://www.saigonchildren.com/"
		title="Saigon Children"
		description="Saigon Children enables disadvantaged children and young adults in Vietnam to reach their full potential through receiving a quality education relevant to their needs"
	/>
</div>
