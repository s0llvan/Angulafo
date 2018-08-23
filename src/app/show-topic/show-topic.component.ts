import { Component, OnInit } from '@angular/core';
import { Topic }    from '../topic';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-show-topic',
	templateUrl: './show-topic.component.html',
	styleUrls: ['./show-topic.component.css']
})
export class ShowTopicComponent implements OnInit {

	private topic: Topic = new Topic(null, null, null, null, null);

	private submitted: boolean = false;
	private errors: Array<Object> = [];

	constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

	ngOnInit() {

		this.route.params.subscribe(params => {
			this.showTopic(params.id);
		});
	}

	showTopic(id: Int32Array): void {
		this.apiService.showTopic(id)
		.subscribe(
			(data: Topic) => {
				this.topic = data;
			},
			(data: any) => {
				if(data.error) {
					alert('An error was occured, please try again later !');
				}
			}
			);
	}

	owner(): boolean {
		return this.is_logged() ? this.topic.authorId == this.authService.user.id : false;
	}

	is_logged(): boolean {
		return this.authService.isLoggedIn;
	}
}
