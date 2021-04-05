import { Post } from './post';
import { User } from './user';

export class Topic {
	
	public id: Int32Array;
	public title: string;
	public message: string;
	public categoryId: Int32Array;
	public authorId: Int32Array;
	public Posts: Post[];
	public User: User;
	public createdAt: Date;
	public updatedAt: Date;
	
	constructor(
		id: Int32Array = undefined,
		title: string = undefined,
		message: string = undefined,
		categoryId: Int32Array = undefined,
		authorId: Int32Array = undefined,
		Posts: Post[] = [],
		User: User = undefined,
		createdAt: Date = undefined,
		updatedAt: Date = undefined
		) {
			
		}
		
		public lastPost(): Post {
			return this.Posts.length > 0 ? this.Posts[this.Posts.length - 1] : undefined;
		}
	}