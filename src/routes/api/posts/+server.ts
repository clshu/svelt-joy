import type { RequestHandler } from './$types';
import { dbConnect } from '$lib/db';
import Post from '$lib/models/post';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async (event) => {
	await dbConnect();

	const randomNumber = Math.round(Math.random() * 30);
	// console.log('number: ', randomNumber);
	const posts = await Post.find({}).limit(randomNumber);
	// console.log('posts length', posts.length);
	event.setHeaders({
		'Cache-Control': 'max-age-60'
	});
	return json(posts);
};
