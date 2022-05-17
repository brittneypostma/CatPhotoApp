<script context="module">
	export async function load({ params }) {
		const type = params.type
		return {
			props: {
				type
			}
		}
	}
</script>

<script>
	export let type
</script>

<h1>{type} cat</h1>

<img src={`https://cataas.com/cat/${type}`} alt="a {type} cat" />
