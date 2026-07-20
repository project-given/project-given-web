<script lang="ts">
	import Heading from '$lib/components/Heading.svelte';
	import { firestore } from '$lib/firebase';
	import { getDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let title: string = '';
	let description: string = '';

	onMount(async () => {
		const educationInfo = (await getDoc(firestore.missionAndHistoryInfoDoc)).data()!;
		title = educationInfo.title;
		description = educationInfo.description;

		const s = description.split('. ').map((s) => s + '.');
		if (s[s.length - 1] === '.') s.pop();
		sentences = s;

		console.log(sentences);
	});

	// hello

	let sentences: string[] = [];

	const teamMembers: {
		name: string;
		role: string;
		description: string;
		image: string;
		school?: string;
		major?: string;
	}[] = [
		{
			name: 'Ryan Chen',
			role: 'Co-Founder',
			description:
				'Ryan is a rising senior. In addition to excelling in math competitions and enjoying fantasy football, he is passionate about serving his community and helping underprivileged children around the world. He is committed to making a positive impact wherever he goes.',
			image: '/teamMembers/ryan.png',
			school: 'Massachusetts Institute of Technology, U.S',
			major: 'Mathematics'
		},
		{
			name: 'Jae Won Kim',
			role: 'Co-Founder',
			description:
				'James is a rising senior with a passion for computer science and a talent for developing technology that connects people. As the program director for Project Given, he is committed to using his skills and knowledge to support and empower children around the globe.',
			image: '/teamMembers/james.png',
			school: 'University of Illinois Urbana Champaign, U.S',
			major: 'Data Science'
		},
		{
			name: 'Leejun Kim',
			role: 'Co-Founder',
			description:
				'Leejun is an undergraduate computer science major at the University of Washington, Paul Allen School, Seattle. With a genuine passion for exploring the intersection of technology and society, she constantly seeks to understand the profound ways in which these realms intertwine and influence individuals and communities alike. Outside of her academic pursuits, Leejun loves reading, drawing, and coding.',
			image: '/teamMembers/leejun.png',
			school: 'University of Washington, Paul Allen School, U.S',
			major: 'Computer Science'
		},
		{
			name: 'Brian Lee',
			role: 'Marketing Director',
			description:
				"Brian is a dedicated student at KAIST University, where he is studying Innovation and Technology Management. With a strong desire to make a positive impact in the world, he has already accomplished great things as a member of the Project Given team. His passion for using technology to benefit those in need has been instrumental in our success and we are grateful for his contributions. We can't wait to see what he will do next as he continues to help us achieve our mission of supporting, uplifting, and transforming children around the globe.",
			image: '/teamMembers/brian.png',
			school: 'KAIST University, Korea'
		},
		{
			name: 'Donna Marie',
			role: 'Senior Director',
			description:
				'Donna is a kind and caring individual with a deep love for helping others. She is a dedicated volunteer who is passionate about serving her community and her church. Whether through her work with charitable organizations or her personal acts of kindness, Donna is always looking for ways to make a positive difference in the world.',
			image: '/teamMembers/donna.png'
		},
		{
			name: 'Erica Chan',
			role: 'Regional Director',
			description:
				'Erica is a regional director for Project Given and a accomplished graduate of Hong Kong University, where she studied business and excelled in her studies. In her role as the head of the HKU BBA (IBGM) Publicity Department, she demonstrated strong leadership skills and a passion for business. In her role with Project Given, Erica is dedicated to using her skills and knowledge to make a positive impact in the lives of children around the globe.',
			image: '/teamMembers/erica.png',
			school: 'Hong Kong University, Hong Kong'
		},
		{
			name: 'Joel Shin',
			role: 'Regional Director',
			description:
				'Joel is currently an undergraduate at Yonsei University, Korea, who enjoys reading and expanding his knowledge on a variety of topics. He is compassionate in assisting others and enjoys discussing insights and perspectives on various fields of studies. As a regional director, he is dedicated to work as a bridge to connect people around the world and impact positively through education and reading. Whatever the circumstances, he is willing to help when it comes to children education.',
			image: '/teamMembers/joel.png',
			school: 'Yonsei University, Korea'
		},
		{
			name: 'Yena Cho',
			role: 'Regional Director',
			description:
				'Yena is a talented and ambitious student who is entering her junior year at Sejong Global High School. In addition to being a Times Core reporter, she is passionate about reading and writing and is always looking for new ways to improve her skills. With a strong desire to make a positive impact in the world, Yena is dedicated to using her talents and knowledge to make a difference in the lives of others.',
			image: '/teamMembers/yena.png',
			school: 'Sejong Global High School, Korea'
		},
		{
			name: 'Scott Burke',
			role: 'Senior Director',
			description:
				'Scott is a compassionate and caring individual with a passion for teaching and helping others. His patience, kindness, and ability to listen make him an excellent educator and mentor, particularly when it comes to working with children. He is dedicated to making a positive impact in the lives of those around him and is always looking for ways to lend a helping hand.',
			image: '/teamMembers/scott.png'
		},
		{
			name: 'Mouryne Cayat',
			role: 'Regional Director',
			description:
				'Mouryne is a rising senior at Saint Louis University, Philippines who is deeply committed to making a difference in the world. With a passion for human justice and a strong sense of empathy, she is always looking for ways to help those in need and create a more equitable and just society. In addition to excelling in her studies, Mouryne is actively involved in various social justice initiatives and is dedicated to using her voice and her actions to create positive change.',
			image: '/teamMembers/mouryne.png',
			school: 'Saint Louis University, Philippines'
		}
	];
</script>

<Heading title="Who We Are" description="" />

<div class="h-16" />
<section>
	<h1 class="text-center text-4xl text-blue-0">Our Team</h1>
	<div class="h-4" />
	<h3 class="text-center text-lg">Meet the founders and members of Project Given!</h3>
	<div class="h-16" />
	<div class="flex w-full flex-col items-center px-8">
		<div
			class="flex max-w-7xl flex-row flex-wrap items-start justify-center gap-10 text-lg md:text-2xl md:leading-10 md:tracking-wider"
		>
			{#each teamMembers as member}
				<div class="flex max-w-[400px] flex-col items-center gap-1">
					<img src={member.image} class="h-40 w-40 rounded-full" />
					<span class="mt-1 text-2xl font-bold text-blue-0">{member.name}</span>
					<span class="-mt-1 text-lg">{member.role}</span>
					{#if member.school}
						<span class="text-sm">
							({member.school + (member.major ? ` / ${member.major}` : '')})
						</span>
					{/if}
					<div class="h-1" />
					<span class="text-sm">{member.description}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<div class="h-32" />

<h1 class="text-center text-4xl text-blue-0">Our Mission and History</h1>
<div class="h-4" />
<h3 class="text-center text-lg">Who we are, and what we want to do</h3>
<div class="h-8" />

<div class="flex w-full flex-col items-center px-8">
	<div class="flex max-w-7xl flex-col gap-4 text-lg md:leading-7 md:tracking-wider">
		{#each sentences as sentence}
			<div>{sentence}</div>
		{/each}
	</div>
</div>

<div class="h-16" />
