import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-admin-user',
	templateUrl: './admin-user.component.html',
	styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

	public user: User;

	private editUserForm: any;

	private submitted = false;
	private errors = [];

	private success = false;

	private userRoles: any;

	roles: Array<string> = [
		'USER',
		'ADMIN'
	];

	constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.getUser(params.id);
		});
	}

	getUser(userId): void {
		this.apiService.showUser(userId)
			.subscribe(
				(data: User) => {
					this.user = data;
					this.user.roles = JSON.parse(this.user.roles);
				},
				(data: any) => {
					if (data.error) {
						alert('An error was occured, please try again later !');
					}
				}
			);
	}

	compareRole(item1: string, item2: string): boolean {
		return item1 == 'USER';
	}

	delete(): void {
		this.apiService.deleteUser(this.user.id)
		.subscribe(
			(data: any) => {
				this.router.navigate(['/admin']);
			},
			(data: any) => {
				if (data.error) {
					this.errors = data.error;
				}
			}
		);
	}

	onSubmit(form: NgForm): void {
		this.errors = [];
		this.submitted = true;

		let userRoles: Array<string> = form.controls['roles'].value;
		this.user.roles = userRoles;

		this.apiService.editUser(this.user)
		.subscribe(
			(data: any) => {
				this.success = true;
				this.errors = [];
			},
			(data: any) => {
				if (data.error) {
					this.success = false;
					this.errors = data.error;
				}
			}
		);
	}
}
