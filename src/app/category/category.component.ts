import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { ApiService } from '../api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	private category: Category;

	constructor(private apiService: ApiService, private route: ActivatedRoute) { }

	ngOnInit() {

		this.route.params.subscribe(params => {
			this.showCategory(params.id);
		});
	}

	showCategory(id: Int32Array) {
		this.apiService.showCategory(id)
		.subscribe(
			(data: Category) => {
				this.category = data;
			},
			(data: any) => {
				if(data.error) {
					alert('An error was occured, please try again later !');
				}
			}
			);
	}
}