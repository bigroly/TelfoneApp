import { Component, OnInit } from '@angular/core';
import { Iuser } from '../models/Iuser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {

  private users: Iuser[];
  displayedColumns: string[] = [
    'userId',
    'firstName',
    'lastName',
    'displayName',
    'description',
    'department',
    'team'
  ];

  constructor(private userService: UserService) {
    this.users = [];
  }

  ngOnInit() {
    this.refreshUsers();
  }

  private refreshUsers() {
    this.userService.getUsers().then(response => {
      this.users = response.data;
    });
  }

}
