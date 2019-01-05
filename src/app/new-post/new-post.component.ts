import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Topic } from '../topic';
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

	private topic: Topic = new Topic(null, null, null, null, null, null);

	constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {

		this.route.params.subscribe(params => {
			this.post.topicId = params.id;

			this.loadTopic();
		});
	}

	onSubmit(): void {

		this.submitted = true;

		this.apiService.createPost(this.post)
			.subscribe(
				(data: any) => {
					this.router.navigate(['/topics', this.post.topicId]);
				},
				(data: any) => {
					if (Array.isArray(data.error)) {
						this.errors = data.error;
					} else {
						this.errors.push({ message: 'An error was occured, please try again later !' });
					}
				}
			);
	}

	loadTopic(): void {
		this.apiService.showTopic(this.post.topicId)
			.subscribe(
				(data: any) => {
					this.topic = data;
				},
				(data: any) => {
					this.errors.push({ message: 'An error was occured, please try again later !' });
				}
			);
	}
}
