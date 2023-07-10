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
	// const date = new Date(iso8601);
	const month = months[date.getMonth()];
	const year = date.getFullYear();
	const day = date.getDay();

	return `${month} ${day}, ${year}`;
}

export { getDate };
