import { dbConnect } from '$lib/db';
import type { PageServerLoad } from './$types';
import Post from '$lib/models/post';
import { error } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/utils';

export const load: PageServerLoad = async ({ params }) => {
	console.log(params);
	await dbConnect();
	const post = await Post.findOne({ slug: params.slug });

	// console.log(post);
	if (!post) {
		throw error(404, 'post not found');
	}

	return serializeNonPOJOs({ post });
};
