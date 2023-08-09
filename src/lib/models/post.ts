import { Schema, model, models } from 'mongoose';

export interface IPost {
	title: string;
	content?: string;
	slug: string;
	published: boolean;
}

const postSchema = new Schema<IPost>(
	{
		title: {
			type: String,
			require: [true, 'title is required']
		},
		content: String,
		slug: {
			type: String,
			unique: true
		},
		published: {
			type: Boolean,
			default: false
		}
	},
	{ timestamps: true }
);

// console.log('-> Creating Post');
const Post = models.Post || model('Post', postSchema);

export default Post;
