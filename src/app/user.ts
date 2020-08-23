export class User {

	constructor(
		public id: Int32Array,
		public username: string,
		public password: string,
		public roles: any
	) {
		this.roles = JSON.stringify(['USER']);
	}
}