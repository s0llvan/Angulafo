export class User {
	
	public id: Int32Array;
	public username: string;
	public password: string;
	public passwordConfirmation: string;
	public roles: any;
	
	constructor(
		id: Int32Array = undefined,
		username: string = undefined,
		password: string = undefined,
		passwordConfirmation: string = undefined,
		roles: any = undefined
		) {
			this.roles = JSON.stringify(['USER']);
		}
	}