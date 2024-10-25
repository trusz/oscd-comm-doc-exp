<script lang="ts">
	import * as pckg from "../package.json";
	import "./app.css"
	import IED from "./ied.svelte";
	
	
	// Inputs
	export let doc: XMLDocument | undefined;

	$: ieds = doc?.querySelectorAll("IED");
	
</script>

{#if doc}
	<h2>these are the IEDs</h2>
	<ul>
	{#each ieds as ied}
		<IED iedElement={ied} xmlDocument={doc} />
	{/each}
	</ul>

{/if}

<input type="hidden" name="package-name" value={pckg.name} />
<input type="hidden" name="package-version" value={pckg.version} />
