<script lang="ts">
	import type { IPost } from '$lib/models/post';

	const getPosts = async () => {
		const response = await fetch('api/posts');
		const posts: IPost[] = await response.json();
		return posts;
	};
</script>

<h1>Posts</h1>

{#await getPosts()}
	<p>Loading...</p>
{:then posts}
	<h4>Posts length: {posts.length}</h4>
	<ul>
		{#each posts as { slug, title }}
			<li>{slug}: {title}</li>
		{/each}
	</ul>
{:catch error}
	<p>{error.message}</p>
{/await}
