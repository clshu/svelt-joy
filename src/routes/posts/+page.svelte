<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);
</script>

<h1>Posts</h1>
<p>You can browse posts here.</p>
