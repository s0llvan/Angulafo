import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Topic } from '../topic';
import { Category } from '../category';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
	selector: 'app-new-topic',
	templateUrl: './new-topic.component.html',
	styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {
	
	public topic: Topic;
	
	private submitted: boolean = false;
	public errors: Array<Object> = [];
	
	public category: Category;
	
	constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) {
		this.loadCategory(this.activatedRoute.snapshot.params.id)
		
		this.topic = new Topic();
	}
	
	ngOnInit() {
		
	}
	
	onSubmit(): void {
		
		this.submitted = true;
		this.topic.categoryId = this.category.id;
		
		this.apiService.createTopic(this.topic)
		.subscribe((data: any) => {
			this.router.navigate(['/categories', this.category.id]);
		}, (data: any) => {
			if (Array.isArray(data.error)) {
				this.errors = data.error;
			} else {
				this.errors.push({ message: 'An error was occured, please try again later !' });
			}
		});
	}
	
	loadCategory(categoryId: Int32Array): void {
		this.apiService.showCategory(categoryId).subscribe((data: any) => {
			this.category = data;
		});
	}
}
