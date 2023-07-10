const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

function getDate(date: Date) {
	const d: number[] = [];
	date
		.toISOString()
		.substring(0, 10)
		.split('-')
		.forEach((s) => d.push(Number(s)));
	console.log(d);
	return `${months[d[1] - 1]} ${d[2]}, ${d[0]}`;
}

export { getDate };
