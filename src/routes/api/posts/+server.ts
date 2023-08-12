import type { RequestHandler } from './$types';
import { dbConnect } from '$lib/db';
import Post from '$lib/models/post';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	await dbConnect();

	const limit = Number(url.searchParams.get('limit') ?? 30);

	const urlorder = url.searchParams.get('order') ?? 'asc';
	const order = urlorder === 'asc' ? 1 : -1;

	const posts = await Post.find({}, {}, { limit, sort: { _id: order } });
	return json(posts);
};
