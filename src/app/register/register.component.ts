import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	private user = new User(null, null, null, null);
	private userForm: any;

	private submitted = false;
	private valid = false;
	private errors = [];

	private success = false;

	constructor(private apiService: ApiService) { }

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
