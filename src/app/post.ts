export class Post {
	
	public id: Int32Array;
	public message: string;
	public topicId: Int32Array;
	public authorId: Int32Array;
	public createdAt: Date;
	public updatedAt: Date;
	
	constructor(
		id: Int32Array = undefined,
		message: string = undefined,
		topicId: Int32Array = undefined,
		authorId: Int32Array = undefined,
		createdAt: Date = undefined,
		updatedAt: Date = undefined
		)
		{
			
		}
	}
	