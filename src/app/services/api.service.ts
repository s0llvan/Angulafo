import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../class/user';
import { Topic } from './../class/topic';
import { Observable } from 'rxjs';
import { Post } from './../class/post';
import { Category } from '../class/category';

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
	
	public showCategories(): Observable<Object> {
		return this.http.get(this.apiUrl + '/categories');
	}

	public editCategory(category: Category): Observable<Object> {
		return this.http.put(this.apiUrl + '/categories/' + category.id, category, {
			headers: {
				'Authorization': this.apiToken
			}
		});
	}

	public createCategory(category: Category): Observable<Object> {
		return this.http.post(this.apiUrl + '/categories/', category, {
			headers: {
				'Authorization': this.apiToken
			}
		});
	}

	public deleteCategory(category: Category): Observable<Object> {
		return this.http.delete(this.apiUrl + '/categories/' + category.id, {
			headers: {
				'Authorization': this.apiToken
			}
		});
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
