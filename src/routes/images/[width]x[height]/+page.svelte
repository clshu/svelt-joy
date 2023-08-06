<script lang="ts">
	// import type { PageData } from './$types';
	import { page } from '$app/stores';

	let { width, height } = $page.params;
	// export let data: PageData;
</script>

<h1>Imagze size: width:{width} height: {height}</h1>

<pre>
        {JSON.stringify($page, null, 2)}
</pre>
