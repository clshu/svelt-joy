import type { PageServerLoad } from './$types';
import { dbConnect } from '$lib/db';
import Todo, { type ITodo } from '$lib/models/todo';
import { serializeNonPOJOs } from '$lib/utils';

export const load: PageServerLoad = async () => {
	await dbConnect();
	const result = await Todo.find({});
	const todos: ITodo[] = serializeNonPOJOs(result);
	return { todos };
};
