import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	public apiUrl = 'http://localhost:8000'

	constructor(private http: HttpClient) { }

	public showCategory(id: Int32Array) {
		return this.http.get(this.apiUrl + "/categories/" + id);
	}

	public showAllCategories() {
		return this.http.get(this.apiUrl + "/categories");
	}

	public createUser(user: User) {
		return this.http.post(this.apiUrl + '/users', user);
	}

	public logInUser(user: User) {
		return this.http.post(this.apiUrl + '/login', user);
	}
}
