export class Topic {
	constructor(
		public id: Int32Array,
		public title: string,
		public message: string,
		public categoryId: Int32Array,
		public authorId: Int32Array
		)
	{

	}
}
