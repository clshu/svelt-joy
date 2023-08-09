<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Posts</h1>

<p>Posts length: {data.posts.length}</p>

{#each data.posts as { slug, title }}
	<ul>
		<a href="/posts/{slug}">{title}</a>
	</ul>
{/each}
