import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Topic } from './topic';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	public apiUrl = 'http://localhost:8000'
	public apiToken: string;

	constructor(private http: HttpClient) { }

	public showCategory(id: Int32Array) {
		return this.http.get(this.apiUrl + "/categories/" + id);
	}

	public showAllCategories() {
		return this.http.get(this.apiUrl + "/categories");
	}

	public createTopic(id: Int32Array, topic: Topic) {
		return this.http.post(this.apiUrl + "/categories/" + id, topic, {
			headers: {
				'Authorization': this.apiToken
			}
		});
	}

	public editTopic(topic: Topic) {
		return this.http.post(this.apiUrl + "/topics", topic, {
			headers: {
				'Authorization': this.apiToken
			}
		});
	}

	public showTopic(id: Int32Array) {
		return this.http.get(this.apiUrl + "/topics/" + id);
	}

	public createUser(user: User) {
		return this.http.post(this.apiUrl + '/users', user);
	}

	public logInUser(user: User) {
		return this.http.post(this.apiUrl + '/login', user);
	}
}
