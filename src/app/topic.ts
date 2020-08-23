import { Post } from './post';
import { User } from './user';

export class Topic {
	constructor(
		public id: Int32Array,
		public title: string,
		public message: string,
		public categoryId: Int32Array,
		public authorId: Int32Array,
		public Posts: Post[],
		public User: User,
		public createdAt: Date,
		public updatedAt: Date
	) {

	}

	public lastPost(): Post {
		return this.Posts.length > 0 ? this.Posts[this.Posts.length - 1] : undefined;
	}
}