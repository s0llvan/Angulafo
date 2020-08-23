import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Topic } from '../topic';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-edit-topic',
	templateUrl: './edit-topic.component.html',
	styleUrls: ['./edit-topic.component.css']
})
export class EditTopicComponent implements OnInit {
	
	public topic: Topic;
	
	private submitted: boolean = false;
	public errors: Array<Object> = [];
	
	constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }
	
	ngOnInit() {
		
		this.route.params.subscribe(params => {
			this.showTopic(params.id);
		});
	}
	
	showTopic(id: Int32Array): void {
		this.apiService.showTopic(id).subscribe((data: Topic) => {
			this.topic = data;
		},
		(data: any) => {
			if(data.error) {
				alert('An error was occured, please try again later !');
			}
		}
		);
	}
	
	onSubmit(): void {
		
		this.submitted = true;
		
		this.apiService.editTopic(this.topic).subscribe((data: any) => {
			this.router.navigate(['/categories', this.topic.categoryId]);
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
