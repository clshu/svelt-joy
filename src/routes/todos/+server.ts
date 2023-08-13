import type { RequestHandler } from './$types';
import { dbConnect } from '$lib/db';
import Todo, { type ITodo } from '$lib/models/todo';
import { json } from '@sveltejs/kit';

interface Data {
	success: boolean;
	errors: Record<string, string>;
}

export const POST: RequestHandler = async ({ request }) => {
	await dbConnect();
	const formatData = await request.formData();
	const todo = String(formatData.get('todo'));

	const data: Data = {
		success: false,
		errors: {}
	};

	if (!todo) {
		data.errors.todo = 'Todo is required';
		return json(data, { status: 400 });
	}

	await Todo.create({ text: todo });
	data.success = true;

	return json(data);
};

export const DELETE: RequestHandler = async ({ request }) => {
	await dbConnect();
	const formatData = await request.formData();
	const todoId = String(formatData.get('id'));
	// console.log('todoId', todoId);
	await Todo.findByIdAndDelete(todoId);

	const data: Data = {
		success: true,
		errors: {}
	};

	return json(data);
};
