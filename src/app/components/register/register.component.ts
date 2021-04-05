import { Component, OnInit } from '@angular/core';
import { User } from '../../class/user';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	
	public user: User;
	public userForm: any;
	
	public submitted: boolean = false;
	private valid: boolean = false;
	public errors: Array<Object> = [];
	
	public success: boolean = false;
	
	constructor(private apiService: ApiService) {
		this.user = new User();
	}
	
	ngOnInit() { }
	
	onSubmit(): void {
		
		this.submitted = true;
		
		this.apiService.createUser(this.user).subscribe((data: any) => {
			this.success = true;
			this.errors = [];
		}, (data: any) => {
			if (data.error) {
				this.success = false;
				this.errors = data.error;
			}
		});
	}
	
	passwordConfirmationChange(value: String): void {
		if(value != this.user.password && this.user.password.length == value.length) {
			if(this.errors.filter(error => error['type'] == "passwordConfirmation").length <= 0) {
				this.errors.push({
					message: "Wrong password confirmation",
					type: "passwordConfirmation"
				});
			}
		} else {
			this.errors = this.errors.filter(error => error['type'] != "passwordConfirmation");
		}
	}
}
