import type { RequestHandler } from './$types';
import { dbConnect } from '$lib/db';
import Post from '$lib/models/post';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	await dbConnect();
	const posts = await Post.find();

	return json(posts);
};
