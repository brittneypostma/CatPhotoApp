<script>
	export let cats
</script>

<h1>Cats</h1>

{#each cats as cat}
	<img src={cat.url} alt="cat" />
{/each}
