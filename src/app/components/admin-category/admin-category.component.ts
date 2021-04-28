import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/class/category';
import { ApiService } from 'src/app/services/api.service';
declare var jquery :any;
declare var $ :any;

@Component({
	selector: 'app-admin-category',
	templateUrl: './admin-category.component.html',
	styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {
	
	public categories: Category[] = [];
	public category: Category;
	
	public editCategoryForm: any;
	public createCategoryForm: any;
	
	public submitted: boolean = false;
	public errors: Array<string> = [];
	
	constructor(private apiService: ApiService) {
		
	}
	
	ngOnInit() {
		this.getCategories();
	}
	
	getCategories(): void {
		this.apiService.showCategories().subscribe((categories: Category[]) => {
			categories.map((category) => {
				category.Posts = [];
				category.Topics.forEach((topic) => {
					category.Posts = category.Posts.concat(topic.Posts);
				});
			});
			this.categories = categories;
		},
		(data: any) => {
			if (data.error) {
				alert('An error was occured, please try again later !');
			}
		});
	}
	
	public edit(category: Category): void	 {
		this.category = category;
		
		$('.ui.modal.edit-category')
		.modal({
			closable  : true,
			onDeny    : () => {
				this.apiService.deleteCategory(this.category).subscribe(() => {
					this.getCategories();
				});
				return true;
			},
			onApprove : () => {
				this.onSubmit();
				return true;
			}
		})
		.modal('show')
		;
	}

	public create(): void {
		this.category = new Category();

		$('.ui.modal.create-category')
		.modal({
			closable  : true,
			onDeny    : () => {
				return true;
			},
			onApprove : () => {
				this.apiService.createCategory(this.category).subscribe(() => {
					this.getCategories();
				});
				return true;
			}
		})
		.modal('show')
		;
	}
	
	onSubmit(): void {
		this.apiService.editCategory(this.category).subscribe((category: Category) => {
			this.getCategories();
		});
	}
}
