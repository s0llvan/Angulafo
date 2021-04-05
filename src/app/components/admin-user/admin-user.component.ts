import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
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
	
	constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) {
		this.getUser(this.activatedRoute.snapshot.params.id);
	}
	
	ngOnInit() {
		
	}
	
	getUser(userId: Int32Array): void {
		this.apiService.showUser(userId).subscribe((user: User) => {
			this.user = user;
		}, (data: any) => {
			if (data.error) {
				alert('An error was occured, please try again later !');
			}
		});
	}
	
	compareRole(item1: string, item2: string): boolean {
		return item1 == 'USER';
	}
	
	delete(): void {
		this.apiService.deleteUser(this.user.id).subscribe((data: any) => {
			this.router.navigate(['/admin']);
		}, (data: any) => {
			if (data.error) {
				this.errors = data.error;
			}
		});
	}
	
	onSubmit(form: NgForm): void {
		this.errors = [];
		this.submitted = true;
		
		let userRoles: Array<string> = form.controls['roles'].value;
		this.user.roles = userRoles;
		
		this.apiService.editUser(this.user).subscribe((user: User) => {
			this.success = true;
			this.errors = [];
		}, (data: any) => {
			if (data.error) {
				this.success = false;
				this.errors = data.error;
			}
		});
	}
}
