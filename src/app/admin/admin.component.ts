import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private users: User[];

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getUsers();
    });
  }
  getUsers(): void {
    this.apiService.showAdminUsers()
      .subscribe(
        (data: User[]) => {
          this.users = data;
        },
        (data: any) => {
          if (data.error) {
            alert('An error was occured, please try again later !');
          }
        }
      );
  }
}
