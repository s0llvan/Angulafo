import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public user: User = new User(null, null, null, null);
	public userForm: any;

	public submitted = false;
	public errors: Array<string> = [];

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() { }

	onSubmit(): void {

		this.errors = [];
		this.submitted = true;

		this.authService.logIn(this.user.username, this.user.password).then(() => {
			this.router.navigate(['/profil']);
		}, () => {
			this.errors.push('Username or password is incorrect !');
		});
	}
}
