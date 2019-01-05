import { Post } from './post';

export class Topic {
	constructor(
		public id: Int32Array,
		public title: string,
		public message: string,
		public categoryId: Int32Array,
		public authorId: Int32Array,
		public Posts: Post[]
	) {

	}

	public lastPost(): Post {
		return this.Posts.length > 0 ? this.Posts[this.Posts.length - 1] : undefined;
	}
}