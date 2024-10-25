<script lang="ts">

import {sclObserver} from "./scl-observer"
import { createSCLObserverStore } from "./scl-observer-store"


// export let xmlDocument: XMLDocument | undefined;
export let iedElement: Element | undefined;


let root: HTMLDivElement;

let name = createSCLObserverStore<string>(
	iedElement,
	(changedElement) => changedElement.getAttribute("name")
)

let accessPoint = createSCLObserverStore<string>(
	iedElement.querySelector("AccessPoint"),
	(changedElement) => changedElement.getAttribute("name"),
)

let logicalNodeNames = createSCLObserverStore<string[]>(
	iedElement.querySelector("LDevice"),
	(ld) => Array.from(ld.querySelectorAll("LN")).map(ln => ln.getAttribute("lnType")),
)

// $: query = `IED[name="${iedElement.getAttribute("name")}"]`
// function updateState(targetIED){
// 	console.log("updating IED state")
// 	name = targetIED.getAttribute("name")
// }

// let accessPointName = ""
// function updateAccessPoint(accessPoint: Element, mutationList: MutationRecord[]){
// 	console.log("access point updated", mutationList)
// 	accessPointName = accessPoint.getAttribute("name")

// }
interface Update {
  element: Element;
  oldAttributes: Record<string, string | null>;
  newAttributes: Record<string, string | null>;
  derived?: boolean;
  checkValidity?: () => boolean;
}


function handleInput(e: Event){
	const target = e.target as HTMLInputElement
	if(!iedElement){ return; }

	const detail:{action: Update} = {
		action: {
			element: iedElement,
			oldAttributes: {name: ""},
			newAttributes: {name: target.value},
		},
	}
	const event = new CustomEvent("editor-action", {
		detail,
		composed: true,
		bubbles:  true,
	})

	root.dispatchEvent(event)
}


</script>

<x-ied bind:this={root}>
	
	<!-- <h3>name: {$name}; AP: {accessPointName}</h3> -->
	<h3>name: {$name}; AP: {$accessPoint}</h3>
	<input type="text" name="iedName" value={$name} on:input={handleInput} />
	LN Names
	<ul>
		{#each $logicalNodeNames as lnName}
			<li>{lnName}</li>
		{/each}
	</ul>
</x-ied>