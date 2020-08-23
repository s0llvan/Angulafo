export class Post {
	constructor(
		public id: Int32Array,
		public message: string,
		public topicId: Int32Array,
		public authorId: Int32Array,
		public createdAt: Date,
		public updatedAt: Date
		)
	{

	}
}
