import type { IPost } from '$lib/models/post';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, depends }) => {
	const random = Math.round(Math.random() * 30);
	const response = await fetch(`/api/posts?limit=${random}`);
	const posts: IPost[] = await response.json();
	depends('app:posts');
	return { posts };
}) satisfies PageLoad;
