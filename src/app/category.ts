import { Topic } from './topic';

export class Category {

	public id: Int32Array;

	constructor(
		public title: string = undefined,
		public description: string = undefined,
		public Topics: Topic[] = []
	) {

	}
}