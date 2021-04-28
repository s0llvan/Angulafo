import { Post } from './post';
import { Topic } from './topic';

export class Category {

	public id: Int32Array;
	public title: string;
	public description: string;
	public Topics: Topic[];
	public Posts: Post[];
	public postsCount: Number;

	constructor(
		title: string = undefined,
		description: string = undefined,
		Topics: Topic[] = []
	) {

	}
}