<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils';

	export let data: PageData;

	const createdDate = formatDate(new Date(data.post.createdAt));
</script>

<hgroup>
	<h1>{data.post.title}</h1>
	<h2>{createdDate}</h2>
</hgroup>

<div class="contenet">
	{@html data.post.content}
</div>
