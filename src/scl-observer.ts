export function sclObserver(
	node: Element,
	{ 
		root, 
		query, 
		listener,
	}:Props
){
	const targetNode = root.querySelector(query);
	if(!targetNode) {
		console.error(`sclObserver: query "${query}" not found in xmlDocument`);
		return;
	}

	const config = { attributes: true, childList: true, subtree: false };

	const observer = new MutationObserver((mutations) => {
		listener(targetNode, mutations)
	});

	observer.observe(targetNode, config);
	listener(targetNode, []);
	  
	return{
		destroy: observer.disconnect
	}

}


export interface Props {
	root: Element;
	query: string;
	listener: (targetNode: Element, mutations: MutationRecord[]) => void;
}