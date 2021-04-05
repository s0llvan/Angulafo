import { Topic } from './topic';

export class Category {

	public id: Int32Array;
	public title: String;
	public description: String;
	public topics: Topic[];

	constructor(
		title: string = undefined,
		description: string = undefined,
		Topics: Topic[] = []
	) {

	}
}