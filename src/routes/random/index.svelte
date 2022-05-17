<script>
	export let cat
	let cats = ['cute', 'fluffy', 'funny', 'angry', 'sad']
</script>

<h1>A Random Cat</h1>

<img src={cat[0].url} alt="a random cat" />

<h2>Or choose your favorite</h2>

<nav>
	<ul>
		{#each cats as cat}
			<li>
				<a href={`/random/${cat}`}>
					{cat}
				</a>
			</li>
		{/each}
	</ul>
</nav>
