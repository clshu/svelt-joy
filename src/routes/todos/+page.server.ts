import type { PageServerLoad } from './$types';
import { dbConnect } from '$lib/db';
import Todo, { type ITodo } from '$lib/models/todo';
import { serializeNonPOJOs } from '$lib/utils';
import { fail, type Actions } from '@sveltejs/kit';

// Initialize the database connection
await dbConnect();

export const load: PageServerLoad = async () => {
	const result = await Todo.find({});
	const todos: ITodo[] = serializeNonPOJOs(result);
	return { todos };
};

export const actions: Actions = {
	addTodo: async ({ request }) => {
		const formData = await request.formData();
		const todo = String(formData.get('todo'));
		if (!todo) return fail(400, { todo, missing: true });

		await Todo.create({ text: todo });

		return { success: true };
	},
	removeTodo: async ({ request }) => {
		const formData = await request.formData();
		const todoId = String(formData.get('id'));
		if (!todoId) return fail(400, { todoId, missing: true });

		await Todo.findOneAndDelete({ _id: todoId });

		return { success: true };
	},
	clearAll: async () => {
		await Todo.deleteMany({});

		return { success: true };
	}
};
