import { Component, OnInit } from '@angular/core';
import { Post } from '../../class/post';
import { Topic } from '../../class/topic';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-new-post',
	templateUrl: './new-post.component.html',
	styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
	
	public submitted: boolean = false;
	public errors: Array<Object> = [];
	
	public topic: Topic;
	public post: Post;
	
	constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) {
		this.loadTopic(this.activatedRoute.snapshot.params.id);

		this.post = new Post();
	}
	
	ngOnInit() {
		
	}
	
	onSubmit(): void {
		
		this.submitted = true;
		this.post.topicId = this.topic.id;
		
		this.apiService.createPost(this.post).subscribe((data: any) => {
			this.router.navigate(['/topics', this.post.topicId]);
		}, (data: any) => {
			if (Array.isArray(data.error)) {
				this.errors = data.error;
			} else {
				this.errors.push({ message: 'An error was occured, please try again later !' });
			}
		});
	}
	
	loadTopic(topicId: Int32Array): void {
		this.apiService.showTopic(topicId).subscribe((data: any) => {
			this.topic = data;
		},
		(data: any) => {
			this.errors.push({ message: 'An error was occured, please try again later !' });
		});
	}
}
