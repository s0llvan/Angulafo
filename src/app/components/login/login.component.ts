import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public user: User = new User(null, null, null, null);
	public userForm: any;

	public submitted: boolean = false;
	public errors: Array<string> = [];

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() {
		this.user.username = "admin";
		this.user.password = "password";
	}

	onSubmit(): void {

		this.errors = [];
		this.submitted = true;

		this.authService.logIn(this.user.username, this.user.password).then(() => {
			this.router.navigate(['/profil']);
		}, () => {
			this.errors.push('Username or password is incorrect !');
			this.submitted = false;
		});
	}
}
