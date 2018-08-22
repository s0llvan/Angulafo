import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
	selector: 'app-profil',
	templateUrl: './profil.component.html',
	styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

	public user: User;

	constructor(private authService: AuthService) { }

	ngOnInit() {
		this.user = this.authService.user;
	}
}
