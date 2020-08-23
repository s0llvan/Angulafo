export class User {

	constructor(
		public id: Int32Array = null,
		public username: string = null,
		public password: string = null,
		public passwordConfirmation: string = null,
		public roles: any = null
	) {
		this.roles = JSON.stringify(['USER']);
	}
}