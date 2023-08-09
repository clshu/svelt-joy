// TODO: [SVEL-4] Create a endpoint

import type { RequestHandler } from '@sveltejs/kit';

// GET /api/newsletters
export const GET: RequestHandler = async (event) => {
	const options: ResponseInit = {
		status: 418,
		headers: {
			x: 'My Header'
		}
	};

	return new Response('Hello', options);
};

// POST /api/newsletters
export const POST: RequestHandler = async (event) => {
	const data = await event.request.formData();
	const email = data.get('email');

	// subscribe the user to the newsletter
	console.log(email);

	return new Response(JSON.stringify({ success: true }), {
		headers: {
			'Content-Type': 'applicatpn/json'
		}
	});
};
