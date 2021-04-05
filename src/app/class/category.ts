import { Topic } from './topic';

export class Category {

	public id: Int32Array;
	public title: String;
	public description: String;
	public Topics: Topic[];
	public postsCount: Number;

	constructor(
		title: string = undefined,
		description: string = undefined,
		Topics: Topic[] = []
	) {

	}
}