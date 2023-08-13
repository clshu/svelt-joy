import type { LayoutServerLoad } from './$types';
import { dbConnect } from '$lib/db';
import Post, { type IPost } from '$lib/models/post';
import { serializeNonPOJOs } from '$lib/utils';

// Initialize the database connection
await dbConnect();

export const load = (async (event) => {
	const result = await Post.find({}, { title: 1, slug: 1 }, { limit: 5 });
	const posts: IPost[] = serializeNonPOJOs(result);
	return { posts };
}) satisfies LayoutServerLoad;
