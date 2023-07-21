interface Link {
	name: string;
	url: string;
	description: string;
}

const links: Link[] = [
	{ name: 'Project Health', url: '/project-health', description: 'On medical help and food' },
	{ name: 'Project Education', url: '/project-education', description: 'On education' },
	{
		name: 'Mission and History',
		url: '/mission-and-history',
		description: 'Who we are, and what we want to do'
	}
];

const specialLinks: Link[] = [
	{ name: 'Start a Chapter', url: '/start-a-chapter', description: 'Start a new chapter with us' },
	{
		name: 'Our Partnerships',
		url: '/our-partnerships',
		description: 'Organizations that are with us'
	},
	{ name: 'Contact Us', url: '/contacts-and-social-media', description: 'Get in contact' }
];

export type { Link };
export { links, specialLinks };
