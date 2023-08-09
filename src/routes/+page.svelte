<script lang="ts">
	const subscribe = async (e: Event) => {
		const form = e?.target as HTMLFormElement;
		const data = new FormData(form);

		await fetch('/api/newsletter', {
			method: 'POST',
			body: data
		});
	};
</script>

<h1>Newsletters</h1>

<form on:submit|preventDefault={subscribe}>
	<input type="email" name="email" id="n-email" />
	<button>Subscribe</button>
</form>
