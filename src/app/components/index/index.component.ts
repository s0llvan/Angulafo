import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Category } from '../../class/category';
import { Router } from '@angular/router';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
	
	public categories: Category[] = [];
	
	constructor(private apiService: ApiService, private router: Router) {
		
	}
	
	ngOnInit() {
		
		this.showCategories();
	}
	
	showCategories(): void {
		this.apiService.showCategories().subscribe((categories: Category[]) => {
			categories.map((category => category.postsCount = category.Topics.reduce((sum, topic) => sum + topic.Posts.length, 0)));

			this.categories = categories;
		},
		(data: any) => {
			if (data.error) {
				alert('An error was occured, please try again later !');
			}
		});
	}
}
