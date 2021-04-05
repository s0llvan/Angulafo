import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	
	public users: User[];
	
	constructor(private apiService: ApiService, private route: ActivatedRoute) { }
	
	ngOnInit() {
		this.route.params.subscribe(params => {
			this.getUsers();
		});
	}
	getUsers(): void {
		this.apiService.showUsers().subscribe((users: User[]) => {
			this.users = users;
		},
		(data: any) => {
			if (data.error) {
				alert('An error was occured, please try again later !');
			}
		}
		);
	}
}
