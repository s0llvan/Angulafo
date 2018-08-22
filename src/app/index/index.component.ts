import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Category }    from '../category';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

	private categories: Category[];

	constructor(private apiService: ApiService) { }

	ngOnInit() {

		this.apiService.showAllCategories()
		.subscribe(
			(data: Category[]) => {
				this.categories = data;
			},
			(data: any) => {
				if(data.error) {
					
				}
			}
			);
	}
}
