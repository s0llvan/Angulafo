import { Component, OnInit } from '@angular/core';
import { User }    from '../user';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	private user = new User(null, null);
	private userForm: any;

	private submitted = false;
	private valid = false;
	private errors = [];

	private success = false;

	constructor(private apiService: ApiService, private cookieService: CookieService) { }

	ngOnInit() { }

	onSubmit() {

		this.submitted = true;

		this.apiService.createUser(this.user)
		.subscribe(
			(data: any) => {
				this.success = true;
				this.errors = [];

				this.cookieService.set('session', data.session);
			},
			(data: any) => {
				if(data.error) {
					this.success = false;
					this.errors = data.error;
				}
			}
			);
	}
}
