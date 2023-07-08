/**
	Calls a function when something is clicked ouside of the specified element
	@example 
	<div use:clickOutside={handleClickOutside} >
*/
function clickOutside(node: HTMLElement, callback: Function) {
	const handleClick = (event: Event) => {
		const target = event.target as HTMLElement;
		if (node && !node.contains(target) && !event.defaultPrevented) {
			callback();
		}
	};

	document.addEventListener('pointerup', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('pointerup', handleClick, true);
		}
	};
}

export { clickOutside };
