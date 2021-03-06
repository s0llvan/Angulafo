import { Component, OnInit } from '@angular/core';
import { Topic } from '../../class/topic';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-show-topic',
	templateUrl: './show-topic.component.html',
	styleUrls: ['./show-topic.component.css']
})
export class ShowTopicComponent implements OnInit {
	
	public topic: Topic;
	
	public errors: Array<Object> = [];
	
	constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) {
		this.showTopic(this.activatedRoute.snapshot.params.id);
	}
	
	ngOnInit() {
		
	}
	
	showTopic(id: Int32Array): void {
		this.apiService.showTopic(id)
		.subscribe(
			(data: Topic) => {
				this.topic = data;
			},
			(data: any) => {
				if (data.error) {
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
	