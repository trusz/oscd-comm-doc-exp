
import { writable, derived } from "svelte/store"
import { onDestroy } from "svelte"

export function createSCLObserverStore<T>(
	root: Element,
	processFn: (targetNode: Element, mutations: MutationRecord[]) => T,
	query?: string,
){
	const valueStore = writable<T | undefined>(undefined);
	const readOnlyStore = derived(valueStore, ($valueStore) => $valueStore);

	let targetNode: Element | null = root;
	if(query) {
		targetNode = root.querySelector(query);
	}
	if(!targetNode) {
		console.error(`sclObserver: query "${query}" not found in xmlDocument`);
		return;
	}

	const config = { attributes: true, childList: true, subtree: false };

	const observer = new MutationObserver((mutations) => {
		const result = processFn(targetNode, mutations);
		valueStore.set(result);
	});

	observer.observe(targetNode, config);
	onDestroy(() => { console.log("disconnecting observer"); observer.disconnect()});
	valueStore.set(processFn(targetNode, []))
	
	return readOnlyStore
}