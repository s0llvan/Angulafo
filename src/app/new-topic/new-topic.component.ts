import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Topic }    from '../topic';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
	selector: 'app-new-topic',
	templateUrl: './new-topic.component.html',
	styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {

	private topic: Topic = new Topic(null, null, null, null, null);

	private submitted: boolean = false;
	private errors: Array<Object> = [];

	constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {

		this.route.params.subscribe(params => {
			this.topic.categoryId = params.id;
		});
	}

	onSubmit(): void {

		this.submitted = true;

		this.apiService.createTopic(this.topic)
		.subscribe(
			(data: any) => {
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
