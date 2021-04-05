export class Post {
	constructor(
		public id: Int32Array = undefined,
		public message: string = undefined,
		public topicId: Int32Array = undefined,
		public authorId: Int32Array = undefined,
		public createdAt: Date = undefined,
		public updatedAt: Date = undefined
		)
	{

	}
}
