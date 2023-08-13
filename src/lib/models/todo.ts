import pkg from 'mongoose';
const { Schema, models, model } = pkg;

export interface ITodo extends pkg.Document {
	text: string;
	completed: boolean;
}

const todoSchema = new Schema<ITodo>(
	{
		text: {
			type: String,
			require: [true, 'title is required']
		},
		completed: {
			type: Boolean,
			default: false
		}
	},
	{ timestamps: true }
);

// console.log('-> Creating Todo');
const Todo = models.Todo || model('Todo', todoSchema);

export default Todo;
