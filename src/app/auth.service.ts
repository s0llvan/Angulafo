import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, of, forkJoin } from 'rxjs';
import { tap, delay, switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	public isLoggedIn: boolean = false;

	public user: User;

	// Redirect url stored after log in
	public redirectUrl: string;

	private output: any;

	constructor(private apiService: ApiService, private router: Router) { }

	public logIn(username: string, password: string):Promise<any> {
		return this.apiService.logInUser({
			'username': username,
			'password': password
		})
		.pipe(map((data: any) => {
			this.isLoggedIn = true;
			this.user = data;
		}))
		.toPromise();
	}

	public logOut(): void {
		this.isLoggedIn = false;
		this.user = undefined;
		this.router.navigate(['/login']);
	}
}
