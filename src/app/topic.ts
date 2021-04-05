import { Post } from './post';
import { User } from './user';

export class Topic {
	constructor(
		public id: Int32Array = undefined,
		public title: string = undefined,
		public message: string = undefined,
		public categoryId: Int32Array = undefined,
		public authorId: Int32Array = undefined,
		public Posts: Post[] = [],
		public User: User = undefined,
		public createdAt: Date = undefined,
		public updatedAt: Date = undefined
	) {

	}

	public lastPost(): Post {
		return this.Posts.length > 0 ? this.Posts[this.Posts.length - 1] : undefined;
	}
}