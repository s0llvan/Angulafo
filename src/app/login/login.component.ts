import { Component, OnInit } from '@angular/core';
import { User }    from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private user = new User(null, null, null);
	private userForm: any;

	private submitted = false;
	private errors = [];

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
