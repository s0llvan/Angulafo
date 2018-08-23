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

	private topic: Topic = new Topic(null, null);

	private submitted: boolean = false;
	private errors: Array<Object> = [];

	private categoryId: Int32Array;

	constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {

		this.route.params.subscribe(params => {
			this.categoryId = params.id;
		});
	}

	onSubmit() {

		this.submitted = true;

		this.apiService.createTopic(this.categoryId ,this.topic)
		.subscribe(
			(data: any) => {
				this.router.navigate(['/categories', this.categoryId]);
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
