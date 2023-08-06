import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load = (async () => {
	// return {};
	// throw new Error('Yikes');
	throw error(404, { message: 'Yikes' });
}) satisfies PageLoad;
