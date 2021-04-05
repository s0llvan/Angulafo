import { Component, OnInit } from '@angular/core';
import { Category } from '../../class/category';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
	
	public category: Category;
	
	constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private authService: AuthService) {
		this.showCategory(this.activatedRoute.snapshot.params.id);
	}
	
	ngOnInit() {
		
	}
	
	showCategory(categoryId: Int32Array): void {
		this.apiService.showCategory(categoryId)
		.subscribe(
			(category: Category) => {
				this.category = category;
			},
			(data: any) => {
				if (data.error) {
					alert('An error was occured, please try again later !');
				}
			}
			);
		}
	}
	