export class User {

	constructor(
		public id: Int32Array,
		public username: string,
		public password: string,
		public roles: string
	) {
		this.roles = JSON.stringify(['USER']);
	}
}