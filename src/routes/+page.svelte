<script lang="ts">
	import { invalidate } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);

	const rerunLoadFunction = () => {
		invalidate('app:posts');
		// invalidate('api/posts') It won't in this case due to changing url
		// invalidate(url => url.href.include('app:posts'))
		// invalidateAll()
	};
</script>

<h1>Posts</h1>
<button on:click={rerunLoadFunction}> Rerun Load Function </button>
<h4>Showing {data.posts.length}</h4>
<ul class="posts">
	{#each data.posts as { slug }}
		<li><a href="/posts/{slug}">{slug.replace(/-/g, ' ')}</a></li>
	{/each}
</ul>

<style>
	.posts {
		line-height: 1;
		text-transform: capitalize;
	}
</style>
