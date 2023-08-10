<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);
</script>

<h1>Posts</h1>

<p>Posts length: {posts.length}</p>

{#each posts as { slug, title }}
	<ul>
		<a href="/api/posts/{slug}">{title}</a>
	</ul>
{/each}
