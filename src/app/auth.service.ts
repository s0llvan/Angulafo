import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	
	public isLoggedIn: boolean = false;
	public isAdminLoggedIn: boolean = false;
	
	public user: User;
	
	// Redirect url stored after log in
	public redirectUrl: string;
	
	private output: any;
	
	constructor(private apiService: ApiService, private router: Router) { }
	
	public logIn(username: string, password: string): Promise<any> {
		return this.apiService.logInUser({
			'id': null,
			'username': username,
			'password': password,
			'passwordConfirmation': password,
			'roles': null
		})
		.pipe(map((data: any) => {
			this.isLoggedIn = true;
			this.isAdminLoggedIn = JSON.parse(data.roles).indexOf('ADMIN') >= 0;
			this.user = data;
			this.apiService.apiToken = data.session;
		}))
		.toPromise();
	}
	
	public logOut(): void {
		this.isLoggedIn = false;
		this.user = undefined;
		this.router.navigate(['/login']);
	}
}
