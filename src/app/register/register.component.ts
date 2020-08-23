import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	public user: User;
	public userForm: any;

	private submitted = false;
	private valid = false;
	public errors: Array<string> = [];

	public success = false;

	constructor(private apiService: ApiService) {
		this.user = new User();
	}

	ngOnInit() { }

	onSubmit(): void {

		this.submitted = true;

		this.apiService.createUser(this.user)
			.subscribe(
				(data: any) => {
					this.success = true;
					this.errors = [];
				},
				(data: any) => {
					if (data.error) {
						this.success = false;
						this.errors = data.error;
					}
				}
			);
	}
}
