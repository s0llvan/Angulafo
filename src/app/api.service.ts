import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Topic } from './topic';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	public apiUrl = 'http://localhost:8002'
	public apiToken: string;

	constructor(private http: HttpClient) { }

	public showCategory(id: Int32Array): Observable<Object> {
		return this.http.get(this.apiUrl + '/categories/' + id);
	}

	public showAllCategories(): Observable<Object> {
		return this.http.get(this.apiUrl + '/categories');
	}

	public createTopic(topic: Topic): Observable<Object> {
		return this.http.post(this.apiUrl + '/topics', topic, {
			headers: {
				'Authorization': this.apiToken
			}
		});
	}

	public editTopic(topic: Topic): Observable<Object> {
		return this.http.put(this.apiUrl + '/topics', topic, {
			headers: {
				'Authorization': this.apiToken
			}
		});
	}

	public showTopic(id: Int32Array): Observable<Object> {
		return this.http.get(this.apiUrl + '/topics/' + id);
	}

	public createPost(post: Post): Observable<Object> {
		return this.http.post(this.apiUrl + '/posts', post, {
			headers: {
				'Authorization': this.apiToken
			}
		});
	}

	public createUser(user: User): Observable<Object> {
		return this.http.post(this.apiUrl + '/users', user);
	}

	public logInUser(user: User): Observable<Object> {
		return this.http.post(this.apiUrl + '/login', user);
	}

	public showAdminUsers(): Observable<Object> {
		return this.http.get(this.apiUrl + '/users', {
			headers: {
				'Authorization': this.apiToken
			}
		});
	}

	public showAdminUser(id: Int32Array): Observable<Object> {
		return this.http.get(this.apiUrl + '/users/' + id, {
			headers: {
				'Authorization': this.apiToken
			}
		});
	}

	public editUser(user: User): Observable<Object> {
		return this.http.put(this.apiUrl + '/users', user, {
			headers: {
				'Authorization': this.apiToken
			}
		});
	}

	public deleteUser(user: User): Observable<Object> {
		return this.http.delete(this.apiUrl + '/users/' + user.id, {
			headers: {
				'Authorization': this.apiToken
			}
		});
	}
}
