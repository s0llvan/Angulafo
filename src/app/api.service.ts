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

	public apiUrl: string = 'http://localhost:8002'
	public apiToken: string;

	constructor(private http: HttpClient) { }

	public showCategory(categoryId: Int32Array): Observable<Object> {
		return this.http.get(this.apiUrl + '/categories/' + categoryId);
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

	public showTopic(topicId: Int32Array): Observable<Object> {
		return this.http.get(this.apiUrl + '/topics/' + topicId);
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

	public showUsers(): Observable<Object> {
		return this.http.get(this.apiUrl + '/users', {
			headers: {
				'Authorization': this.apiToken
			}
		});
	}

	public showUser(userId: Int32Array): Observable<Object> {
		return this.http.get(this.apiUrl + '/users/' + userId, {
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

	public deleteUser(userId: Int32Array): Observable<Object> {
		return this.http.delete(this.apiUrl + '/users/' + userId, {
			headers: {
				'Authorization': this.apiToken
			}
		});
	}
}
