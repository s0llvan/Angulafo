import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-new-post',
	templateUrl: './new-post.component.html',
	styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

	private post: Post = new Post(null, null, null, null);

	private submitted: boolean = false;
	private errors: Array<Object> = [];

	constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {

		this.route.params.subscribe(params => {
			this.post.topicId = params.id;
		});
	}

	onSubmit(): void {

		this.submitted = true;
		console.log(this.post);
		this.apiService.createPost(this.post)
		.subscribe(
			(data: any) => {
				this.router.navigate(['/topics', this.post.topicId]);
			},
			(data: any) => {
				if(Array.isArray(data.error)) {
					this.errors = data.error;
				} else {
					this.errors.push({ message: 'An error was occured, please try again later !' });
				}
			}
			);
	}
}
