import { Topic } from './topic';

export class Category {

	constructor(
		public title: string,
		public description: string,
		public Topics: Topic[]
	) {

	}
}