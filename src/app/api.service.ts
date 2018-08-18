import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	url = 'http://localhost:8000'

	constructor(private http: HttpClient) { }

	public createUser(user: User) {
		return this.http.post(this.url + '/users', user);
	}
}
