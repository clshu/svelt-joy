import { dbConnect, dbDisconnect } from './db';
import Post, { type IPost } from './models/post';

type OPost = {
	title: string;
	body: string;
};

const getPosts = async () => {
	const response = await fetch('https://dummyjson.com/posts');
	const { posts } = await response.json();
	return posts as OPost[];
};

const slugify = (text: string) => {
	return text
		.replace(/\s/g, '-')
		.replace(/[^a-zA-Z0-9-]/g, '')
		.toLocaleLowerCase();
};

const main = async () => {
	await dbConnect();
	const posts = await getPosts();

	const iposts: IPost[] = posts.map((post) => {
		return {
			title: post.title,
			content: post.body,
			slug: slugify(post.title)
		};
	});

	await Post.create(iposts);

	await dbDisconnect();
};

main();
