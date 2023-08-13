import { dbConnect } from '$lib/db';
import type { PageServerLoad } from './$types';
import Post, { type IPost } from '$lib/models/post';
import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

await dbConnect();
export const load: PageServerLoad = async ({ params }) => {
	console.log(params);

	const post: IPost | null = await Post.findOne({ slug: params.slug });

	// console.log(post);
	if (!post) {
		throw error(404, 'post not found');
	}

	return serializeNonPOJOs({ post });
};
