import type { IPost } from '$lib/models/post';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/posts');
	const posts: IPost[] = await response.json();
	return { posts };
}) satisfies PageLoad;
